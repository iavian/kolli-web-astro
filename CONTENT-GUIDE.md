# How to edit the Kolli Hills website content

You **do not need to know programming** to update this website. All the content
lives in simple text files inside the `src/content/` folder. Each file has a small
block of settings at the top (between the two `---` lines) called *frontmatter*,
followed by the description text.

After you change a file and save it, the website rebuilds and the change goes live
(your developer or hosting service handles publishing).

---

## 📁 Where things live

| What you want to change        | Folder                              | File type |
| ------------------------------ | ----------------------------------- | --------- |
| Attractions (falls, viewpoints…) | `src/content/attractions/`        | Markdown (`.md`) |
| Places to stay                 | `src/content/stays/`                | Markdown (`.md`) |
| Restaurants / cafés            | `src/content/eat/`                  | Markdown (`.md`) |
| Advisories (alerts)            | `src/content/advisories/`           | Markdown (`.md`) |
| Phone contacts                 | `src/content/contacts.json`         | One JSON file |

**Golden rule:** the easiest way to add something new is to **copy an existing
file in the same folder, rename it, and edit it.**

---

## ➕ Add a new restaurant (example)

1. Go to `src/content/eat/`.
2. Copy `hill-spice-restaurant.md` and rename the copy, e.g. `green-leaf-hotel.md`
   (use lowercase letters and hyphens, no spaces).
3. Open it and edit the top section:

   ```markdown
   ---
   title: Green Leaf Hotel
   cuisine: South Indian
   summary: A short one-line description shown on the card.
   location: Near the bus stand
   priceRange: ₹80 – ₹200 per person
   phone: "+91 90000 12345"
   vegOnly: true
   status: open      # open or closed
   order: 4          # smaller number = shown earlier
   ---

   Write the longer description here. You can use **bold**, lists, and headings.
   ```

4. Save. The new restaurant appears automatically on the **Eat** page.

To **remove** a restaurant, just delete its file.

---

## 🚧 Mark a waterfall or attraction as closed

Open the attraction's file in `src/content/attractions/` and change the `status`
line near the top:

```markdown
status: closed                 # options: open, caution, closed
statusNote: Reopens after monsoon   # optional short note shown on the badge
```

- `open` → green badge
- `caution` → amber badge (e.g. slippery, rising water)
- `closed` → red badge

You do **not** delete the file — just flip the status. Change it back to `open`
later.

---

## ⚠️ Post a new advisory (e.g. "Temple closed", "Falls flooded")

1. Go to `src/content/advisories/`.
2. Copy an existing file and rename it, e.g. `agaya-gangai-closed.md`.
3. Edit the top:

   ```markdown
   ---
   title: Agaya Gangai falls closed due to heavy rain
   severity: critical        # info, warning, or critical
   active: true              # true = shown on the homepage banner
   updated: 2026-07-15       # date you posted it (YYYY-MM-DD)
   summary: One-line summary shown in the banner and list.
   ---

   Write the full details here.
   ```

4. When the situation is over, set `active: false` (it moves to the "Past" list)
   or delete the file.

- `severity: info` → blue
- `severity: warning` → amber
- `severity: critical` → red

---

## 📞 Edit phone contacts (police, hospital, mechanics…)

Open `src/content/contacts.json`. Each contact is a block like this:

```json
{
  "id": "kumar-bike-mechanic",
  "name": "Kumar Two-Wheeler Service (Bike Mechanic)",
  "category": "Bike Mechanic",
  "phone": "+91 90000 00301",
  "address": "Semmedu market area",
  "notes": "Motorcycle and scooter repairs",
  "available": "8:30 AM – 8:00 PM"
}
```

- To **add** a contact, copy one block, paste it (don't forget the comma between
  blocks), and change the details. Give it a unique `id`.
- To **remove** one, delete its block.
- `category` must be one of: `Emergency`, `Police`, `Hospital`, `Car Mechanic`,
  `Bike Mechanic`, `Taxi`, `Tourism`, `Fuel`.

> Tip: keep the punctuation exactly as shown — every block needs `{ }` and the
> blocks are separated by commas. If the site fails to build, a missing comma or
> quote is the usual cause.

---

## 🖼️ Adding photos (optional)

1. Put your image files in the `public/images/` folder.
2. In the item's file, add an `image` line pointing to it:

   ```markdown
   image: /images/agaya-gangai.jpg
   ```

If you don't add an image, the site automatically shows a nice coloured tile with
an icon, so it always looks complete.

---

## ✅ Quick checklist before publishing

- [ ] Replaced the **sample phone numbers** with real, verified ones.
- [ ] Checked attraction **timings and entry fees** are current.
- [ ] Removed or deactivated any **out-of-date advisories**.
- [ ] Spell-checked new descriptions.
