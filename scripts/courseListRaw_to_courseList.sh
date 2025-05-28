#!/bin/bash

jq 'map({
  courseID: .["科號"],
  department: (.["科號"] | gsub("[\\d\\s]"; "")),
  nameZH: .["課程中文名稱"],
  nameEN: .["課程英文名稱"],
  credits: (.["學分數"] | tonumber),
  enrollmentLimit: (if .["人限"] == "" then 0 else (.["人限"] | tonumber) end),
  freshmanReservedSeats: (.["新生保留人數"] | tonumber),
  GEObject: .["通識對象"],
  GECategory: .["通識類別"],
  languageOfLecture: (if .["授課語言"] == "中" then "Chinese" else "English" end),
  suspensionStatus: .["停開註記"],
  classroom: (.["教室與上課時間"] | split("\n") | .[:-1] | map(split("\t")[0])),
  classTime: (.["教室與上課時間"] | split("\n") | .[:-1] | map(split("\t")[1])),
  instructorNamesZH: (.["授課教師"] | split("\n") | .[:-1] | map(split("\t")[0])),
  instructorNamesEN: (.["授課教師"] | split("\n") | .[:-1] | map(split("\t")[1])),
  remarks: .["備註"],
  prerequisites: .["擋修說明"],
  courseRestrictions: .["課程限制說明"],
  expertises: (.["第一二專長對應"] | split("\t")),
  creditPrograms: (.["學分學程對應"] | split("/")),
  noExtraEnrollmentDescription: .["不可加簽說明"],
  requiredOrOptionalFor: (.["必選修說明"] | split("\t") | .[:-1])
})' "$1" > "${2:-mapped.json}"
