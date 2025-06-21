# Blog Structure

This directory contains the blog section of the portfolio website.

## File Structure

```
blogs/
├── index.html          # Main blog listing page
├── article1.html       # First blog article
├── article_template.html # Template for new articles
└── README.md           # This file
```

## Adding New Articles

1. **Copy the template**: Use `article_template.html` as a starting point for new articles
2. **Name the file**: Follow the pattern `article2.html`, `article3.html`, etc.
3. **Update content**: Replace all placeholder text with your actual content:
   - `[Article Title]` - Your article title
   - `[Date]` - Publication date
   - `[X] min` - Estimated reading time
   - `[Category]` - Article category
   - `[Tag1], [Tag2], [Tag3]` - Relevant tags
   - All content sections and paragraphs

4. **Update blog index**: Add a new entry to `index.html` in the "Recent Articles" section
5. **Update main portfolio**: Add a link to the new article in the main `../index.html` file's "Recent Blog Posts" section

## Template Usage

The template includes:
- Proper navigation back to blog index and main portfolio
- Article metadata (date, reading time, category)
- Standard structure with sections and conclusion
- Tags and related articles section
- Social sharing encouragement

## Navigation

- **From main portfolio**: `blogs/index.html` (blog listing)
- **From blog index**: Individual articles (`article1.html`, `article2.html`, etc.)
- **From articles**: Back to blog index or main portfolio

## Styling

All blog pages use the same CSS files as the main portfolio:
- `../stylesheets/styles.css`
- `../stylesheets/pygment_trac.css`
- `../javascripts/scale.fix.js`
