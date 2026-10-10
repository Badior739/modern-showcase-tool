<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the studio presentation at the index route with anchored sections; project details use accessible dialogs to preserve browsing context.
- Keep all studio visual roles and responsive section layouts in src/styles.css and use the shared Button variants for controls, so presentation remains consistent.
- Contact requests are prepared in WhatsApp with user confirmation; do not imply automatic delivery or store personal data without a connected service.
