"""Build the WiCoDE27 block for WordPress.

  python3 build.py preview          -> dist/preview.html (local assets, mock WP layout)
  python3 build.py wp media.json    -> dist/block.html   (asset paths swapped for WP media URLs)
"""
import json, re, sys, pathlib

here = pathlib.Path(__file__).parent
src = (here / "wicode27.html").read_text()
dist = here / "dist"; dist.mkdir(exist_ok=True)

if sys.argv[1] == "preview":
    body = src.replace("{{A}}", "../../public")
    page = f"""<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>WiCoDE27 preview</title><style>body{{margin:0;font-family:sans-serif}}
.siteHeader{{height:90px;display:flex;align-items:center;justify-content:space-between;padding:0 10%;border-bottom:1px solid #eee}}
.page-header{{background:#4a90c8;color:#fff;text-align:center;padding:30px}}
.container{{max-width:1140px;margin:0 auto;padding:0 15px}}.mainSection{{width:760px;max-width:100%;padding:0 15px}}
.siteContent{{padding:56px 0 64px}}.siteFooter{{background:#222;color:#fff;padding:40px}}</style></head><body>
<header class="siteHeader"><b>ACM Dubai (site header)</b><span>HOME EVENTS MEETINGS NEWSLETTER</span></header>
<div class="page-header"><h1>EVENTS</h1></div>
<div class="section siteContent"><div class="container"><div class="row"><div class="mainSection"><article><div class="entry-body">
{body}
</div></article></div></div></div></div><footer class="siteFooter">site footer</footer></body></html>"""
    (dist / "preview.html").write_text(page)
else:
    media = json.loads(pathlib.Path(sys.argv[2]).read_text())  # {"art/hero.webp": "https://..."}
    out = re.sub(r"\{\{A\}\}/([\w/.-]+)", lambda m: media[m.group(1)], src)
    assert "{{A}}" not in out
    (dist / "block.html").write_text("<!-- wp:html -->\n" + out + "\n<!-- /wp:html -->\n")
print("ok")
