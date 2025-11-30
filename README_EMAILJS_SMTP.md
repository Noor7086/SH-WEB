# EmailJS SMTP Setup Guide

This project uses EmailJS with custom SMTP configuration, allowing you to use your own SMTP server while running only the frontend.

## Why EmailJS with SMTP?

- ✅ No separate backend server needed
- ✅ Run only one server (Vite dev server)
- ✅ Use your own SMTP credentials
- ✅ Free tier available (200 emails/month)
- ✅ Easy setup and configuration

## Setup Instructions

### 1. Create EmailJS Account

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Verify your email address

### 2. Add Custom SMTP Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Select **Custom SMTP Server**

### 3. Configure SMTP Settings

#### For Gmail:
```
Service Name: Gmail SMTP (or any name)
Host: smtp.gmail.com
Port: 587
Username: your-email@gmail.com
Password: [Your Gmail App Password - see below]
Security: STARTTLS
```

**Gmail App Password Setup:**
1. Enable 2-Step Verification on your Google Account
2. Go to Google Account → Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a password for "Mail"
5. Use this 16-character password in EmailJS (not your regular Gmail password)

#### For Outlook/Hotmail:
```
Host: smtp-mail.outlook.com
Port: 587
Security: STARTTLS
```

#### For Yahoo:
```
Host: smtp.mail.yahoo.com
Port: 587
Security: STARTTLS
```

#### For Custom SMTP:
```
Host: your-smtp-server.com
Port: 587 (or 465 for SSL)
Security: STARTTLS (or SSL for port 465)
```

4. Click **Create Service**
5. Copy your **Service ID** (you'll need this)

### 4. Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact Form Submission - {{project_type}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #667eea; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 3px solid #667eea; }
    .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #764ba2; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">{{from_name}}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:{{from_email}}">{{from_email}}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">{{phone}}</div>
      </div>
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">{{company}}</div>
      </div>
      <div class="field">
        <div class="label">Project Type:</div>
        <div class="value">{{project_type}}</div>
      </div>
      <div class="field">
        <div class="label">Budget:</div>
        <div class="value">{{budget}}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">{{message}}</div>
      </div>
    </div>
  </div>
</body>
</html>
```

**To Email:**
```
{{to_email}}
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Reply To:**
```
{{from_email}}
```

4. Click **Save**
5. Copy your **Template ID**

### 5. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (or **User ID**)
3. Copy it

### 6. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 7. Restart Development Server

After adding environment variables, restart your dev server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (the email configured in SMTP settings)
4. You should receive the contact form submission

## Troubleshooting

### Email not sending?

1. **Check SMTP credentials:**
   - Verify username and password are correct
   - For Gmail, ensure you're using App Password (not regular password)

2. **Check Service ID, Template ID, and Public Key:**
   - Verify they're correct in your `.env` file
   - Make sure there are no extra spaces

3. **Check EmailJS Dashboard:**
   - Go to EmailJS dashboard → Activity
   - Check for error messages

4. **Check Browser Console:**
   - Open browser DevTools (F12)
   - Check Console tab for errors

5. **Test SMTP Connection:**
   - In EmailJS dashboard, go to your service
   - Click "Test" to verify SMTP connection

### Gmail App Password Issues?

- Make sure 2-Step Verification is enabled
- Generate a new App Password if the old one doesn't work
- Use the 16-character password (no spaces)

### CORS Errors?

- EmailJS handles CORS automatically
- If you see CORS errors, check your Public Key

## EmailJS Pricing

- **Free Tier:** 200 emails/month
- **Paid Plans:** Starting at $15/month for 1,000 emails

## Security Notes

- Never commit `.env` file to version control
- Keep your EmailJS Public Key secure
- Use App Passwords for Gmail (not regular passwords)
- Consider upgrading to paid plan for production use

## Production Deployment

1. Add environment variables to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Other platforms: Check their documentation

2. Rebuild and deploy your site

3. Test the contact form after deployment

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

