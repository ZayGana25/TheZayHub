"use server"

import nodemailer from "nodemailer"

/**
 * Send contact email using Nodemailer
 * This is a server action that handles sending emails from the contact form
 */
export async function sendContactEmail(formData) {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return { success: false, error: "All fields are required" }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return { success: false, error: "Please enter a valid email address" }
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify the connection configuration
    await transporter.verify().catch((error) => {
      console.error("SMTP connection error:", error)
      throw new Error("Failed to connect to email server")
    })

    // Set up email data
    const mailOptions = {
      from: `"TheZayHub Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Use dedicated recipient if available
      replyTo: formData.email, // So you can reply directly to the sender
      subject: `Portfolio Contact: ${formData.subject}`,
      text: `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${formData.subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #555;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${formData.message.replace(/\n/g, "<br>")}</div>
          </div>
          
          <p style="color: #777; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId)

    return { success: true }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return {
      success: false,
      error:
        process.env.NODE_ENV === "development"
          ? `Failed to send email: ${error.message}`
          : "Failed to send email. Please try again later.",
    }
  }
}
