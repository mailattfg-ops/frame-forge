# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Contact form WhatsApp automation

The contact form now submits to the Supabase Edge Function `send-contact-enquiry`.
That function sends two WATI API v3 template messages:

- one to the customer who submitted the form
- one to your admin WhatsApp number

### Required Supabase secrets

Set these in your Supabase project before deploying the function:

```sh
supabase secrets set \
	WATI_API_ENDPOINT=https://live-mt-server-XXXXX.wati.io \
	WATI_API_TOKEN=your_wati_api_token \
	WATI_CUSTOMER_TEMPLATE_NAME=frame_forge_contact_customer_v1 \
	WATI_ADMIN_TEMPLATE_NAME=frame_forge_contact_admin_v1 \
	WATI_ADMIN_WHATSAPP_NUMBER=919745004161 \
	WATI_CHANNEL=optional_channel_name
```

`WATI_CHANNEL` is optional. Leave it unset if you want WATI to use the default channel.

`WATI_API_TOKEN` can be stored either as the raw token or with `Bearer ` prefix.

### Deploy the function

```sh
supabase functions deploy send-contact-enquiry
```

### Recommended WATI templates

Create these as WhatsApp templates in WATI. The code sends them through the v3 endpoint `/api/ext/v3/messageTemplates/send`.

Customer template name: `frame_forge_contact_customer_v1`

```text
Hello {{1}},

Thank you for enquiring with Frame Forge about {{2}}.
We have received your request and our team will respond within 24 hours.

Regards,
Frame Forge
```

Customer template variables:

1. Customer name
2. Event name

Admin template name: `frame_forge_contact_admin_v1`

```text
New Frame Forge website enquiry.

Name: {{1}}
Organization: {{2}}
Event: {{3}}
Event date: {{4}}
Expected attendees: {{5}}
Email: {{6}}
Phone: {{7}}
Services: {{8}}
Message: {{9}}
```

Admin template variables:

1. Customer name
2. Organization
3. Event name
4. Event date
5. Expected attendees
6. Email
7. Phone number
8. Selected services
9. Additional details

### Frontend behavior

After a successful submit, the user sees a toast saying:

```text
Thank you for enquiring
We will respond within 24 hrs. A WhatsApp confirmation has been sent.
```
