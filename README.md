# The Site

- https://nthuccc.vercel.app
- A better NTHU Course Catalog Client

# Ideas

- 更好的清大課表查詢＆預排體驗
  - 易用、訊息層級
- Build with Next.js 15 (CVE patched) and [lowdb](https://github.com/typicode/lowdb)
- API data from: [NTHU course opendata](https://curricul.site.nthu.edu.tw/p/406-1208-111356,r7883.php?Lang=zh-tw)

## Sitemap

- [x] homepage/search page
- [x] search result page
- [x] query by {courseID} page
- [x] {courseID} page
- [ ] Catalog
  - [ ] department
  - [ ] GE & GEC courses
  - [ ] PE courses
  - [ ] lecturers
  - [ ] **a Graph view?**
- [ ] About
  - [ ] How to use this site?
  - [ ] API docs
  - [ ] Link to GitHub repo
- [x] Related Sites(實用連結)
  - [ ] 清大課務組的連結之類的
- [x] 404_page
- [x] 500_page
- meta
  - [ ] robot.txt
  - [ ] sitemap.xml

## Todo

- [ ] Add LLM and Retriever support?
- [ ] Share function
  - [ ] URL
  - [ ] [[Web Share API]]
  - [ ] LINE, messenger, WhatsApp, etc.
- [x] 實用連結們（擺在會產生疑惑之處附近）
  - [x] [認識科號、節次、開課學分規定](https://curricul.site.nthu.edu.tw/p/403-1208-8507-1.php?Lang=zh-tw)
  - [x] [通識對象代碼說明](https://curricul.site.nthu.edu.tw/p/404-1208-11133.php)
  - [x] [館舍代碼(教室)](https://curricul.site.nthu.edu.tw/p/406-1208-50862,r8507.php?Lang=zh-tw)
  - 原選課系統、校區地圖、學年行事曆…
  - [Labook](https://nthulabook.onrender.com/)
- [x] different HTML `<titles/>` for different pages
- [ ] change query in result page (via a similar Form in the mainpage)
  - Search result of {filter options}
- [ ] 相同科號往年資料（縱向查詢）
  - [ ] e.g. 11220CS135602 and 11120CS135602
  - same name or same courseID? (just check both)
- [ ] Query by （橫向查詢）
  - [x] department
  - [x] instructor
  - [x] courseName
  - [x] courseID
  - [x] language of instruction
  - [x] Venue ✅ 2025-03-30
  - [ ] Time (the input modal quite differs from others)
  - [ ] 通識、核心通識

> extra stuff

- [ ] English UI & i18n stuff
- [ ] Site Performance
  - [ ] Put JSON, images, and other assets in `/public`
  - [ ] Cache and sitemap
  - [ ] Measure website traffic
  - [ ] Set up redirect from firebase host( NTHUCCC.web.app)
- [ ] Test the API with postman or something
  - [ ] Make CORS available [[What_is_API]]
- [x] .env and other security issues
  - [x] remove the .env on Vercel
- [ ] 各系所課程地圖
- [ ] 試排課表
  - [ ] storage? some kinda account or just save locally
  - [ ] 關注 (加入收藏)
  - [ ] 排序
- [ ] Additional Comments
  - [ ] 甜度 (給分、等第分佈)
  - [ ] 涼度 (平均作業量 or 考試量)
  - [ ] 個人評價
- [ ] Accessible and ARIA stuff
