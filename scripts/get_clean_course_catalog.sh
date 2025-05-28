URL=https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/OPENDATA/open_course_data.json

# This script does:
# 1. Download raw JSON
# 2. Decode Unicode (via Python JSON parser)
# 3. Decode HTML-encodings (via html.unescape)
# 4. Write sanitized JSON to file
# Should run every semester to get the latest course catalog.

curl -s "$URL"  \
| jq .  \
| python3 -c "import sys, html; print(html.unescape(sys.stdin.read()),end='')" \
> foobar.json



