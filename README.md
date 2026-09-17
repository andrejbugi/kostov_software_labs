# Kostov Software Labs

A responsive, single-page software studio portfolio inspired by the structure of the Signal Plus Engineering website, with a distinct visual identity. Plain HTML, CSS, and JavaScript; no build step or runtime dependencies.

## Preview

From this directory:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. You can also open `index.html` directly.

## Included

- A software-focused introduction, company story, and engineering services.
- Nine projects: Elevator Maintenance / Signal Plus, Pazaro, Wedding Planner, Nightlife / Kadevecer, Subscriptions & Tickets, Mishel Trajkovski, Kamin Kama, Mladi Shampioni, and Milenium Kom.
- Subscriptions & Tickets is a Python/Tkinter desktop app with SQLite for a local pool, covering member records, monthly and annual subscriptions, ticket validity, and revenue reporting.
- Project category filters and keyboard-accessible detail dialogs.
- AWS experience covering EC2, S3, ECR, IAM, and SNS, alongside Docker and Terraform.
- Responsive mobile navigation, reduced-motion support, and readable content without JavaScript.
- An email draft form addressed to **info@kostovsoftware.com**, plus a direct email link.

## Contact behavior

The form validates the visitor’s entries and opens their email application with a prepared message. **It does not send email itself**, call a backend, or store submissions. The visitor must send the draft from their email app. The direct email address remains available if they do not have an email application configured. A backend or form service is needed if direct website submission is desired later.

## Edit

- `index.html`: visible copy, project cards, navigation, metadata, and contact address.
- `assets/style.css`: colors, layout, typography, illustrations, and responsive styles.
- `assets/main.js`: project details, verified source-provided project URLs, filtering, dialogs, navigation, and the form’s `CONTACT_EMAIL`.
- `assets/images/`: copied imagery from the existing Mishel Trajkovski, Kamin Kama, and Mladi Shampioni projects.
- `assets/favicon.svg`: the studio’s initial mark.

Product previews are illustrative compositions, not live dashboards or usage metrics. The maintenance preview uses sample values from the Signal Plus reference website.

Known public URLs are configured for Signal Plus, Wedding Planner, Kadevecer, Kamin Kama, and Milenium Kom. Pazaro, Mishel Trajkovski, and Mladi Shampioni intentionally have no public URL until their correct production addresses are supplied; their detail panels work normally. Subscriptions & Tickets is a desktop app with no public website or download link. Add `url` to the corresponding entry in `projects` in `assets/main.js` when available.

## Publish

Upload the contents of this folder to any static web host, such as an S3/CloudFront setup or GitHub Pages. No API keys or environment variables are required. Google Fonts provides DM Sans and Space Grotesk; the site uses system sans-serif fallbacks if the fonts are unavailable. There are no analytics or tracking scripts.

Once the final website domain is chosen, add its canonical URL and absolute social sharing image URL to `index.html`. No deployment domain has been assumed.
