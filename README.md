# The Site
- https://nthuccc.vercel.app
- A better NTHU Course Catalog Client

# Dev Ideas
- 更好的清大課表查詢＆預排體驗
	- 易用、訊息層級
- Build with [[Next.js]] 14 and [lowdb](https://github.com/typicode/lowdb)
- API data from: [NTHU course opendata](https://curricul.site.nthu.edu.tw/p/406-1208-111356,r7883.php?Lang=zh-tw)  

  
## Sitemap
- [x] homepage/search page
- [x] search result page
- [x] query by {courseID} page
- [x] {courseID} page
- [ ] Catalog
	- [ ] department
	- [ ] GE & GEC courses
- [ ] About
	- [ ] How to use this site?
	- [ ] API docs
	- [ ] Link to GitHub repo
- [ ] Related Sites(實用連結)
	- [ ] 清大課務組的連結之類的
- [x] 404_page
- [x] 500_page
- [ ] robot.txt
- [ ] sitemap.xml

- 實用連結們
	- [ ] [認識科號、節次、開課學分規定](https://curricul.site.nthu.edu.tw/p/403-1208-8507-1.php?Lang=zh-tw)
	 - e.g. 原選課系統、校區地圖、學年行事曆…
	- [ ] [通識對象代碼說明](https://curricul.site.nthu.edu.tw/p/404-1208-11133.php)
	- [x] [館舍代碼(教室)](https://curricul.site.nthu.edu.tw/p/406-1208-50862,r8507.php?Lang=zh-tw)


## Todo/Features
- [x] site setting object ([[Good_Practice_for_WebDev]])
- [x] Search Page
	- [x] 11210 課表
	- [x] 11220 課表
	- [ ] [113上課表6/1公布，預排同步開始](https://curricul.site.nthu.edu.tw/p/406-1208-265393,r7797.php?Lang=zh-tw)
- [x] Error handling
	- [x] 404 page
	- [x] 500 page
- [ ] Query by
	- [x] department
	- [x] instructor
	- [x] courseName
	- [x] courseID
	- [x] language of instruction
	- [ ] Time
- [ ] 課程詳細資訊 in CourseView
	- [ ] 擋修
	- [ ] 必修/選修
	- [ ] 跨領域學分學程
	- [ ] 第一第二專長
	- [ ] 通識
		- [ ] 核心向度 1234
		- [ ] 附連結至 [課務組通識對象說明](https://curricul.site.nthu.edu.tw/p/404-1208-11133.php)
		- [ ] 通識對象
	- [ ] Links to stuff
	- [ ] 課綱 (Syllabus)(類似校務行政系統，但有規劃地呈現)
- [ ] Filter results
	- [ ] 學分 (e.g. >2)
	- [ ] 上課地點 (e.g. 南大太遠、南校區山上太遠)
	- [ ] [Table with search and sort](https://ui.mantine.dev/component/table-sort/#table-sort)
	- [ ] [Table with sticky header](https://ui.mantine.dev/component/table-scroll-area/#table-scroll-area)
	- [x] 通識學分對象 (1,3,7) 加個 badge 換個顏色 
- [ ] different titles for different pages
- [ ] readme
- [ ] Share
	- [ ] URL
	- [ ] LINE
	- [ ] messenger
	- [ ] whatsapp
	- [ ] etc.
- [ ] UI stuff
	- [ ] Responsive design
		- [ ] don't show courseID for mobile
	- [x] Change Icon
	- [ ] [Theme Color](https://colorhunt.co/palette/11052c3d087bf43b86ffe459)
	- [ ] [gradient boarder CSS trick](https://codepen.io/jlengstorf/pen/WNPGMJo)
	- [ ] Open Graph and SEO
	- [ ] polish & refine



>extra stuff
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

# Issues
- How to automatically update courseList data every day/week/month  
	- cronjob?
- Virtualization for very long list(1000+) or just warn about the slow performance  
	- ==state that querying the whole list will be very slow==
	- [tanstack](https://tanstack.com/virtual/v3)  
	- [react-window](https://github.com/bvaughn/react-window)  
	- or just use https://www.mantine-react-table.com/
- [x] trim redundant spaces in data
- [x] Fix char display bug `&#num;` by HTML decode
	```plaintext
	for example:
	"instructorNamesZH": [" 鄭兆&#29641;"] => [" 鄭兆珉 "]  
	"instructorNamesEN": ["CHENG, CHAO-MIN"],
	...
	```

