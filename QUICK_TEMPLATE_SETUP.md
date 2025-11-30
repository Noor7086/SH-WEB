# Quick EmailJS Template Setup

## Copy-Paste Ready Template

### In EmailJS Dashboard:

1. **Go to:** Email Templates → Create New Template

2. **Template Name:** `Contact Form Submission`

3. **Subject:**
```
New Contact Form Submission - {{project_type}}
```

4. **To Email:**
```
{{to_email}}
```

5. **From Name:**
```
{{from_name}}
```

6. **From Email:**
```
{{from_email}}
```

7. **Reply To:**
```
{{from_email}}
```

8. **Content (HTML):** Copy the template from `EMAILJS_TEMPLATE.md` file

## All Form Fields Included:

✅ **Full Name** - `{{from_name}}`  
✅ **Email Address** - `{{from_email}}`  
✅ **Phone Number** - `{{phone}}`  
✅ **Company Name** - `{{company}}`  
✅ **Project Type** - `{{project_type}}`  
✅ **Budget Range** - `{{budget}}`  
✅ **Project Details/Message** - `{{message}}`

## Quick Test

After saving, use the Test feature in EmailJS with these values:
- from_name: John Doe
- from_email: john@example.com
- phone: +1234567890
- company: ABC Corp
- project_type: web-development
- budget: $5000
- message: This is a test message
- to_email: fahadshafiq77@gmail.com

## Need More Details?

See `EMAILJS_TEMPLATE.md` for:
- Complete HTML templates (2 versions)
- Plain text version
- Troubleshooting guide
- Variable reference

