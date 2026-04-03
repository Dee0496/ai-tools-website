{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{useRouter\} from "next/router"\
\
export default function JobPage()\{\
\
const router = useRouter()\
const \{slug\} = router.query\
\
if(!slug) return null\
\
const title = slug.replaceAll("-"," ")\
\
return(\
\
<div style=\{\{padding:"40px",maxWidth:"800px",margin:"auto"\}\}>\
\
<h1>\{title\}</h1>\
\
<p>\
These are the best AI tools professionals use to work faster and earn more.\
</p>\
\
<ul>\
\
<li>\
<a href="#">Jasper AI \'96 AI writing assistant</a>\
</li>\
\
<li>\
<a href="#">Copy AI \'96 AI marketing generator</a>\
</li>\
\
<li>\
<a href="#">Canva AI \'96 design graphics instantly</a>\
</li>\
\
<li>\
<a href="#">Notion AI \'96 productivity workspace</a>\
</li>\
\
</ul>\
\
</div>\
\
)\
\
\}}
