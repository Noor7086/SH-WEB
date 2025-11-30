# EmailJS Email Template - Complete Guide

This document contains the complete EmailJS template for your contact form with all fields.

## Form Fields

Your contact form includes:
1. **Full Name** (required) - `{{from_name}}`
2. **Email Address** (required) - `{{from_email}}`
3. **Phone Number** (optional) - `{{phone}}`
4. **Company Name** (optional) - `{{company}}`
5. **Project Type** (required) - `{{project_type}}`
6. **Budget Range** (optional) - `{{budget}}`
7. **Project Details/Message** (required) - `{{message}}`

## EmailJS Template Setup

### Step 1: Go to Email Templates

1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates** in the left sidebar
3. Click **Create New Template**

### Step 2: Configure Template Settings

**Template Name:**
```
Contact Form Submission
```

**Subject:**
```
New Contact Form Submission - {{project_type}}
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

### Step 3: Copy This HTML Template

Copy and paste this complete HTML template into the EmailJS template editor:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
                                📧 New Contact Form Submission
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                                You have received a new inquiry from your website
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px 20px;">
                            
                            <!-- Contact Information Section -->
                            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #667eea;">
                                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                                    <span style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 16px;">👤</span>
                                    Contact Information
                                </h2>
                                
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                            <strong style="color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Full Name</strong>
                                            <span style="color: #1e293b; font-size: 16px; font-weight: 500;">{{from_name}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                            <strong style="color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Email Address</strong>
                                            <a href="mailto:{{from_email}}" style="color: #667eea; font-size: 16px; text-decoration: none; font-weight: 500;">{{from_email}}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                            <strong style="color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Phone Number</strong>
                                            <span style="color: #1e293b; font-size: 16px; font-weight: 500;">
                                                {{#phone}}
                                                    <a href="tel:{{phone}}" style="color: #667eea; text-decoration: none;">{{phone}}</a>
                                                {{/phone}}
                                                {{^phone}}
                                                    <span style="color: #94a3b8; font-style: italic;">Not provided</span>
                                                {{/phone}}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0;">
                                            <strong style="color: #667eea; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Company Name</strong>
                                            <span style="color: #1e293b; font-size: 16px; font-weight: 500;">
                                                {{#company}}
                                                    {{company}}
                                                {{/company}}
                                                {{^company}}
                                                    <span style="color: #94a3b8; font-style: italic;">Not provided</span>
                                                {{/company}}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <!-- Project Details Section -->
                            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #764ba2;">
                                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                                    <span style="background: #764ba2; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 16px;">💼</span>
                                    Project Details
                                </h2>
                                
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                            <strong style="color: #764ba2; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Project Type</strong>
                                            <span style="color: #1e293b; font-size: 16px; font-weight: 500; text-transform: capitalize;">{{project_type}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0;">
                                            <strong style="color: #764ba2; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Budget Range</strong>
                                            <span style="color: #1e293b; font-size: 16px; font-weight: 500;">
                                                {{#budget}}
                                                    {{budget}}
                                                {{/budget}}
                                                {{^budget}}
                                                    <span style="color: #94a3b8; font-style: italic;">Not specified</span>
                                                {{/budget}}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <!-- Message Section -->
                            <div style="background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%); border-radius: 8px; padding: 20px; border-left: 4px solid #ef4444;">
                                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                                    <span style="background: #ef4444; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 16px;">💬</span>
                                    Project Details / Message
                                </h2>
                                <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                                    <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
                                </div>
                            </div>
                            
                            <!-- Action Button -->
                            <div style="text-align: center; margin-top: 30px; padding-top: 25px; border-top: 2px solid #e2e8f0;">
                                <a href="mailto:{{from_email}}?subject=Re: {{project_type}} Inquiry" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
                                    📧 Reply to {{from_name}}
                                </a>
                            </div>
                            
                            <!-- Footer -->
                            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                                <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5;">
                                    This email was sent from your website contact form.<br>
                                    <strong style="color: #667eea;">Gentrons</strong> - Software House
                                </p>
                                <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 11px;">
                                    Received at: {{date}} {{time}}
                                </p>
                            </div>
                            
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

### Step 4: Alternative Simple Template (If HTML doesn't work)

If the above template has issues, use this simpler version:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .section { margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #667eea; }
        .field { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0; }
        .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .label { font-weight: bold; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px; }
        .value { color: #1e293b; font-size: 16px; }
        .message-box { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; margin-top: 10px; white-space: pre-wrap; }
        .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: 600; margin-top: 20px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">📧 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new inquiry</p>
        </div>
        <div class="content">
            <div class="section">
                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">👤 Contact Information</h2>
                <div class="field">
                    <span class="label">Full Name</span>
                    <span class="value">{{from_name}}</span>
                </div>
                <div class="field">
                    <span class="label">Email Address</span>
                    <span class="value"><a href="mailto:{{from_email}}" style="color: #667eea;">{{from_email}}</a></span>
                </div>
                <div class="field">
                    <span class="label">Phone Number</span>
                    <span class="value">{{phone}}</span>
                </div>
                <div class="field">
                    <span class="label">Company Name</span>
                    <span class="value">{{company}}</span>
                </div>
            </div>
            
            <div class="section">
                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">💼 Project Details</h2>
                <div class="field">
                    <span class="label">Project Type</span>
                    <span class="value">{{project_type}}</span>
                </div>
                <div class="field">
                    <span class="label">Budget Range</span>
                    <span class="value">{{budget}}</span>
                </div>
            </div>
            
            <div class="section">
                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">💬 Message</h2>
                <div class="message-box">{{message}}</div>
            </div>
            
            <div style="text-align: center;">
                <a href="mailto:{{from_email}}?subject=Re: {{project_type}} Inquiry" class="button">📧 Reply to {{from_name}}</a>
            </div>
            
            <div class="footer">
                <p>This email was sent from your website contact form.</p>
                <p><strong>Gentrons</strong> - Software House</p>
            </div>
        </div>
    </div>
</body>
</html>
```

### Step 5: Plain Text Version (Optional)

For email clients that don't support HTML, you can also add a plain text version:

```
NEW CONTACT FORM SUBMISSION
===========================

CONTACT INFORMATION
-------------------
Full Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

PROJECT DETAILS
---------------
Project Type: {{project_type}}
Budget Range: {{budget}}

MESSAGE
-------
{{message}}

---
This email was sent from your website contact form.
Gentrons - Software House
```

## Template Variables Reference

Make sure these variables match exactly what you're sending from your Contact component:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Full name of the sender | John Doe |
| `{{from_email}}` | Email address of the sender | john@example.com |
| `{{phone}}` | Phone number (optional) | +1234567890 |
| `{{company}}` | Company name (optional) | ABC Corp |
| `{{project_type}}` | Selected project type | web-development |
| `{{budget}}` | Budget range (optional) | $5000 |
| `{{message}}` | Project details/message | Project description... |
| `{{to_email}}` | Your email address | fahadshafiq77@gmail.com |
| `{{subject}}` | Email subject | New Contact Form Submission - web-development |

## Testing Your Template

1. After creating the template, click **Save**
2. Go to **Test** tab in EmailJS
3. Fill in test values for all variables
4. Click **Send Test Email**
5. Check your inbox to see how it looks

## Notes

- EmailJS uses Handlebars syntax for conditionals ({{#variable}}...{{/variable}})
- If a field is empty, it will show the raw variable name
- The template above handles empty fields gracefully
- Make sure variable names match exactly (case-sensitive)

## Troubleshooting

**Variables not showing:**
- Check variable names match exactly (case-sensitive)
- Ensure you're sending all variables from Contact.jsx
- Test with the Test feature in EmailJS

**Email formatting issues:**
- Some email clients strip certain CSS
- Use inline styles for better compatibility
- Test in multiple email clients (Gmail, Outlook, etc.)

**Empty fields showing:**
- The template handles empty fields
- You can customize the "Not provided" text
- Use Handlebars conditionals for better control

