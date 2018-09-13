(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{eeSN:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){},o=u("zl1X"),t=u("KZfJ"),s=u("QkwE"),i=u("vAyd"),c=u("+Xo0"),r=u("0G9f"),d=u("mrSG"),b='\n"styles": [...],\n"stylePreprocessorOptions": {\n  "includePaths": ["node_modules"]\n},\n',m='\n"styles": [\n      ...\n      "./node_modules/@clr/icons/clr-icons.min.css",\n      ...\n  ]\n',h='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n@import "../node_modules/@clr/ui/src/utils/theme.dark.clarity"; // Overwrites with dark theme\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',p='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n@import "../node_modules/@clr/ui/src/utils/theme.dark.clarity"; // Overwrites with dark theme\n\n// Your Application Theme File\n@import "./theme.scss";\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',M='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',g='\n// Clarity Dependency SCSS\n@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme\n\n// Your Application Theme File\n@import "./theme.scss";\n\n// Clarity Component SCSS\n@import "../node_modules/@clr/ui/src/utils/components.clarity";\n',y='\n"styles": [\n      ...\n      "../node_modules/@clr/icons/clr-icons.min.css",\n      "../node_modules/@clr/ui/clr-ui-dark.min.css",\n      ...\n  ]\n',f='\n  "entry": {\n    "main": [\n      "./src/main.ts"\n    ],\n    "styles": [\n      "./node_modules/@clr/icons/clr-icons.min.css",\n      "./node_modules/@clr/ui/clr-ui-dark.min.css",\n      "./src/styles.css"\n    ]\n  },\n',w=function(l){function n(){var n=l.call(this,"themes")||this;return n.uiNodeImports=y,n.uiWebpackImports=f,n.uiCustomClarityLightThemeScssFile=g,n.uiCustomClarityDarkThemeScssFile=p,n.uiCustomClarityLightScssFile=M,n.uiCustomClarityDarkScssFile=h,n.uiNoNodeImports=m,n.uiAngularSass=b,n}return Object(d.b)(n,l),n}(u("N+3j").a),v=e.Ka({encapsulation:2,styles:[],data:{}});function C(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,62,"clr-tab-content",[["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0],[1,"aria-hidden",0],[1,"data-hidden",0]],null,null,o.jb,o.N)),e.La(1,49152,[[3,4]],0,t.rb,[t.Dd,t.Bd,t.ed],null,null),e.La(2,2244608,null,0,t.jd,[e.h,[2,t.id],t.Bd,t.Dd],null,null),(l()(),e.Ma(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["In order to customize the Clarity light theme you will need to build with the Clarity SCSS and overwrite the SCSS variables that set the look-n-feel for each component you need to customize. You will need to build your applications CSS output with Clarity's SCSS. "])),(l()(),e.Ma(5,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Remove Clarity CSS from your build configuration"])),(l()(),e.Ma(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["First, since we are going to be creating custom component styles the first step is to remove all of the Clarity css from your build process."])),(l()(),e.Ma(9,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(10,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(11,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Add (or modify) your applications main.scss file"])),(l()(),e.Ma(13,0,null,0,13,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Next, we need to include the Clarity dependencies and component styles. This example shows one way of adding the Clarity dependencies and component styles based on standard "])),(l()(),e.Ma(15,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["npm"])),(l()(),e.eb(-1,null,[" installation into a "])),(l()(),e.Ma(18,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["node_modules"])),(l()(),e.eb(-1,null,[" directory of the project. In this example the "])),(l()(),e.Ma(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["styles.scss"])),(l()(),e.eb(-1,null,[" file lives at the top of a standard angular-cli application "])),(l()(),e.Ma(24,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["src"])),(l()(),e.eb(-1,null,[" folder."])),(l()(),e.Ma(27,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(28,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(29,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Setup to include Bootstrap"])),(l()(),e.Ma(31,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Clarity requires some Bootstrap files to build, so you'll need to ensure you have it installed. We're locked into Bootstrap 4.0.0-alpha.5, and to avoid breaking changes that occurred in 4.0 we are keeping it until we can support proper migration. "])),(l()(),e.Ma(33,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(34,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(35,0,null,0,13,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Then you'll need to update your build tooling to also look at the "])),(l()(),e.Ma(37,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["node_modules"])),(l()(),e.eb(-1,null,[" when building, so it can find the Bootstrap assets. If you are using the Angular CLI then you should add this configuration to your "])),(l()(),e.Ma(40,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["angular.json"])),(l()(),e.eb(-1,null,[" file. If you are using a different build tool, setup your Sass configuration to add the "])),(l()(),e.Ma(43,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["--include-path=node_modules"])),(l()(),e.eb(-1,null,[" (see "])),(l()(),e.Ma(46,0,null,null,1,"a",[["href","https://github.com/sass/node-sass#usage-1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Sass docs"])),(l()(),e.eb(-1,null,["). "])),(l()(),e.Ma(49,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(50,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(51,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Add a custom theme file"])),(l()(),e.Ma(53,0,null,0,7,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Finally, sandwich your custom theme file between the Clarity dependency SCSS and the Clarity component SCSS. It will hold the values you choose to overwrite as you customize your theme. In this example the "])),(l()(),e.Ma(55,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["styles.scss"])),(l()(),e.eb(-1,null,[" file lives at the top of a standard angular-cli application "])),(l()(),e.Ma(58,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["src"])),(l()(),e.eb(-1,null,[" folder."])),(l()(),e.Ma(61,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(62,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null)],function(l,n){var u=n.component;l(n,10,0,u.uiNoNodeImports,!0),l(n,28,0,u.uiCustomClarityLightScssFile,!0),l(n,34,0,"npm install --save bootstrap@4.0.0-alpha.5",!0),l(n,50,0,u.uiAngularSass,!0),l(n,62,0,u.uiCustomClarityLightThemeScssFile,!0)},function(l,n){l(n,0,0,e.Wa(n,1).tabContentId,e.Wa(n,1).ariaLabelledBy,!e.Wa(n,1).active,!e.Wa(n,1).active)})}function k(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,34,"clr-tab-content",[["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0],[1,"aria-hidden",0],[1,"data-hidden",0]],null,null,o.jb,o.N)),e.La(1,49152,[[5,4]],0,t.rb,[t.Dd,t.Bd,t.ed],null,null),e.La(2,2244608,null,0,t.jd,[e.h,[2,t.id],t.Bd,t.Dd],null,null),(l()(),e.Ma(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["In order to customize the Clarity dark theme, you will need to build with the Clarity SCSS and overwrite the SCSS variables that set the look-and-feel for each component you need to customize. You will need to build your application's CSS output with Clarity's SCSS. "])),(l()(),e.Ma(5,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Remove Clarity CSS from your build configuration"])),(l()(),e.Ma(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["First, since we are going to be creating custom component styles the first step is to remove all of the Clarity CSS from your build process."])),(l()(),e.Ma(9,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(10,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(11,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Add or modify your application's main.scss file"])),(l()(),e.Ma(13,0,null,0,10,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Next, we need to include the Clarity dependencies and component styles. This example shows one way of adding the Clarity dependencies and component styles based on standard "])),(l()(),e.Ma(15,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["npm"])),(l()(),e.eb(-1,null,[" installation into a "])),(l()(),e.Ma(18,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["node_modules"])),(l()(),e.eb(-1,null,[" directory of the project. In this example, the "])),(l()(),e.Ma(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["styles.scss"])),(l()(),e.eb(-1,null,[" file lives at the top of a standard angular-cli application src folder."])),(l()(),e.Ma(24,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(25,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(26,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Add a custom theme file"])),(l()(),e.Ma(28,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Finally, sandwich your custom theme file between the Clarity dependency SCSS and the Clarity component SCSS. It will hold the values you choose to overwrite as you customize your theme. In this example the "])),(l()(),e.Ma(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["styles.scss"])),(l()(),e.eb(-1,null,[" file lives at the top of a standard angular-cli application src folder."])),(l()(),e.Ma(33,0,null,0,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(34,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null)],function(l,n){var u=n.component;l(n,10,0,u.uiNoNodeImports,!0),l(n,25,0,u.uiCustomClarityDarkScssFile,!0),l(n,34,0,u.uiCustomClarityDarkThemeScssFile,!0)},function(l,n){l(n,0,0,e.Wa(n,1).tabContentId,e.Wa(n,1).ariaLabelledBy,!e.Wa(n,1).active,!e.Wa(n,1).active)})}function x(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,252,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),e.La(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.Ma(2,0,null,0,250,"article",[],null,null,null,null,null)),(l()(),e.Ma(3,0,null,null,1,"h5",[["class","component-summary"],["id","a-signpost-description"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Themes help you customize the look and feel of your application."])),(l()(),e.Ma(5,0,null,null,174,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.Ma(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Establish your brand with Clarity"])),(l()(),e.Ma(8,0,null,null,32,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(9,0,null,null,10,"div",[["class","col-xs-12 col-md-4"]],null,null,null,null,null)),(l()(),e.Ma(10,0,null,null,9,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(11,0,null,null,0,"img",[["alt","Color Theming"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-branding.svg"]],null,null,null,null,null)),(l()(),e.Ma(12,0,null,null,7,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Match a company or client\u2019s unique brand identity with "])),(l()(),e.Ma(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["color theming"])),(l()(),e.eb(-1,null,[" at "])),(l()(),e.Ma(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["many different levels of granularity"])),(l()(),e.eb(-1,null,[" allowing for customization at an application or component level. "])),(l()(),e.Ma(20,0,null,null,9,"div",[["class","col-xs-12 col-md-4"]],null,null,null,null,null)),(l()(),e.Ma(21,0,null,null,8,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(22,0,null,null,0,"img",[["alt","Clarity Icons API"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-icons.svg"]],null,null,null,null,null)),(l()(),e.Ma(23,0,null,null,6,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ma(24,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Font customization"])),(l()(),e.eb(-1,null,[" and the "])),(l()(),e.Ma(27,0,null,null,1,"a",[["href","/icons/api"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Clarity Icons API"])),(l()(),e.eb(-1,null,[" offer the power to reinforce identity at the most fundamental levels of user experience. "])),(l()(),e.Ma(30,0,null,null,10,"div",[["class","col-xs-12 col-md-4"]],null,null,null,null,null)),(l()(),e.Ma(31,0,null,null,9,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(32,0,null,null,0,"img",[["alt","Theme information density"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-info.svg"]],null,null,null,null,null)),(l()(),e.Ma(33,0,null,null,7,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Depending on users\u2019 expectations, different applications may require different degrees of "])),(l()(),e.Ma(35,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["information density"])),(l()(),e.eb(-1,null,[". Clarity themes can be adjusted to make an application as "])),(l()(),e.Ma(38,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["sparse or compact"])),(l()(),e.eb(-1,null,[" as it needs to be. "])),(l()(),e.Ma(41,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Default Themes"])),(l()(),e.Ma(43,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Clarity offers two default themes \u2014 light and dark. These themes can be used without modification to optimize user experience or they can be used as a guideline for creating custom themes in Clarity. "])),(l()(),e.Ma(45,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(46,0,null,null,15,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(47,0,null,null,14,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(48,0,null,null,0,"img",[["alt","Light Theme"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-light.svg"]],null,null,null,null,null)),(l()(),e.Ma(49,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Light Theme"])),(l()(),e.Ma(51,0,null,null,10,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Light theme is Clarity\u2019s default. It is best suited to "])),(l()(),e.Ma(53,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["content-rich applications"])),(l()(),e.eb(-1,null,[" where users will be working with the application in "])),(l()(),e.Ma(56,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["well-lit conditions"])),(l()(),e.eb(-1,null,[" for brief periods of time throughout the day. Light theme can help prevent eye strain in applications where a user is expected to "])),(l()(),e.Ma(59,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["read a large amount of content"])),(l()(),e.eb(-1,null,[" \u2014 like documentation or a blog. "])),(l()(),e.Ma(62,0,null,null,12,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(63,0,null,null,11,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(64,0,null,null,0,"img",[["alt","Dark Theme"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-dark.svg"]],null,null,null,null,null)),(l()(),e.Ma(65,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Dark Theme"])),(l()(),e.Ma(67,0,null,null,7,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Dark theme is best suited for applications that are "])),(l()(),e.Ma(69,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["content-sparse, yet highly interactive"])),(l()(),e.eb(-1,null,[". A dark theme can help with eye strain if a user works with an application over a long span of time but in a way that requires "])),(l()(),e.Ma(72,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["focus but not a great amount of reading"])),(l()(),e.eb(-1,null,[". "])),(l()(),e.Ma(75,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Theme Guidelines"])),(l()(),e.Ma(77,0,null,null,7,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Themes offer a great deal of flexibility \u2014 which can be both a good and bad thing. The Clarity team has put continued effort towards "])),(l()(),e.Ma(79,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["accessibility"])),(l()(),e.eb(-1,null,[" and the intentional "])),(l()(),e.Ma(82,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["use of color"])),(l()(),e.eb(-1,null,[" so that our end users can add great value to their products with minimal investment. "])),(l()(),e.Ma(85,0,null,null,3,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.Ma(86,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["But theming can put some of those benefits at risk"])),(l()(),e.eb(-1,null,[". Please review the following guidelines before building a custom theme. "])),(l()(),e.Ma(89,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Use color responsibly"])),(l()(),e.Ma(91,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(92,0,null,null,7,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(93,0,null,null,6,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(94,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use colors that reinforce your brand but in a way that is pleasing. "])),(l()(),e.Ma(96,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Save saturated or bright colors in your palette for highlights. And use them sparingly to highlight actions or content. "])),(l()(),e.Ma(98,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Harsh colors can cause eye strain for users over time. Avoid using too many bright, neon colors and avoid using highly saturated/bold colors as backgrounds over large areas of content. "])),(l()(),e.Ma(100,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(101,0,null,null,8,"div",[["class","clrweb-DoxMedia is-do-block"]],null,null,null,null,null)),(l()(),e.Ma(102,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.Ma(103,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.Ma(104,0,null,null,0,"img",[["alt","Do use brand colors in a pleasing manner"],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-responsability.svg"]],null,null,null,null,null)),(l()(),e.Ma(105,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ma(106,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Do"])),(l()(),e.Ma(108,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use brand colors in a pleasing manner, saving bold or saturated colors for highlights or calls to action. "])),(l()(),e.Ma(110,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Communicate with color"])),(l()(),e.Ma(112,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(113,0,null,null,3,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(114,0,null,null,2,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(115,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Consider using color to communicate meaning to users. Using colors like red for warning or danger and green for success or preferred actions reinforces your user experience. "])),(l()(),e.Ma(117,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(118,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.Ma(119,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.Ma(120,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.Ma(121,0,null,null,0,"img",[["alt","Don't use brand colors irrespective of what the color communicates to users."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-comms.svg"]],null,null,null,null,null)),(l()(),e.Ma(122,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ma(123,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Don't"])),(l()(),e.Ma(125,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use brand colors irrespective of what the color communicates to users. "])),(l()(),e.Ma(127,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Create visual hierarchy"])),(l()(),e.Ma(129,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Darker colors recede while lighter and brighter colors push forward. Be mindful of this when working with brand colors to create a custom theme. "])),(l()(),e.Ma(131,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(132,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(133,0,null,null,8,"div",[["class","clrweb-DoxMedia is-do-block"]],null,null,null,null,null)),(l()(),e.Ma(134,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.Ma(135,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.Ma(136,0,null,null,0,"img",[["alt","Use light and dark colors to reinforce visual hierarchy and draw users\u2019 \n                                focus."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-visual-do.svg"]],null,null,null,null,null)),(l()(),e.Ma(137,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ma(138,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Do"])),(l()(),e.Ma(140,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use light and dark colors to reinforce visual hierarchy and draw users\u2019 focus. "])),(l()(),e.Ma(142,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(143,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.Ma(144,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.Ma(145,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.Ma(146,0,null,null,0,"img",[["alt","Don't draw attention to the wrong items with the use of color."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-visual-dont.svg"]],null,null,null,null,null)),(l()(),e.Ma(147,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ma(148,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Don't"])),(l()(),e.Ma(150,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Draw attention to the wrong items with the use of color. In this example, the content of the cards and datagrid recede into the background while the sidenav and header unnecessarily draw the user\u2019s attention. "])),(l()(),e.Ma(152,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Avoid extreme color combinations"])),(l()(),e.Ma(154,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(155,0,null,null,3,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(156,0,null,null,2,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),e.Ma(157,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Avoid extreme light-on-dark and dark-on-light color combinations that could contribute to eye strain. "])),(l()(),e.Ma(159,0,null,null,9,"div",[["class","col-xs-12 col-md-6"]],null,null,null,null,null)),(l()(),e.Ma(160,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.Ma(161,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.Ma(162,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.Ma(163,0,null,null,0,"img",[["alt","Don't Use color combinations that may cause eye-strain."],["class","clrweb-Img"],["src","assets/images/documentation/themes/theme-color-combos.svg"]],null,null,null,null,null)),(l()(),e.Ma(164,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.Ma(165,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Don't"])),(l()(),e.Ma(167,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use color combinations that may cause eye-strain. "])),(l()(),e.Ma(169,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Be Accessible"])),(l()(),e.Ma(171,0,null,null,1,"p",[["class","p1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Clarity\u2019s color palette is WCAG AA compliant, meaning all color combinations of text-on-background meet the standard for color accessiblity for our users. Use the WebAIM Color Contrast Checker tool to test text and background colors when deciding how a brand\u2019s color palette will be used in an application. "])),(l()(),e.Ma(173,0,null,null,6,"div",[["style","margin: 48px 0;"]],null,null,null,null,null)),(l()(),e.Ma(174,0,null,null,5,"div",[["class","clrweb-DoxBookmark hidden-sm-down"]],null,null,null,null,null)),(l()(),e.Ma(175,0,null,null,2,"div",[["class","clrweb-DoxBookmark-bookmark"],["style","color: #205F00"]],null,null,null,null,null)),(l()(),e.Ma(176,0,null,null,1,"clr-icon",[["shape","bookmark"]],null,null,null,null,null)),e.La(177,16384,null,0,t.Ba,[],null,null),(l()(),e.Ma(178,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" All of the text/background combinations on the Clarity Color Palette page are tested for WCAG AA compliance. "])),(l()(),e.Ma(180,0,null,null,72,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.Ma(181,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Code & Examples"])),(l()(),e.Ma(183,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Clarity UI ships with two css files, "])),(l()(),e.Ma(185,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["clr-ui.min.css"])),(l()(),e.eb(-1,null,[" for the light theme and "])),(l()(),e.Ma(188,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["clr-ui-dark.min.css"])),(l()(),e.eb(-1,null,[" for the dark theme. You can consume either one of these files and have a fully light or dark-themed Clarity application as part of typical build process. If you already use clr-ui in your project there is nothing to do. If you want to switch over to the dark theme use one of the examples below to modify your build process and consume the "])),(l()(),e.Ma(191,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["clr-ui-dark.min.css"])),(l()(),e.eb(-1,null,[" code."])),(l()(),e.Ma(194,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Angular CLI Builds"])),(l()(),e.Ma(196,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Consume the dark theme code in "])),(l()(),e.Ma(198,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" clr-ui-dark.min.css"])),(l()(),e.eb(-1,null,[" by adding it to your styles array in the "])),(l()(),e.Ma(201,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[".angular-cli.json"])),(l()(),e.eb(-1,null,[" file. "])),(l()(),e.Ma(204,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(205,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(206,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Webpack Builds"])),(l()(),e.Ma(208,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Modify your "])),(l()(),e.Ma(210,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["webpack.config.js"])),(l()(),e.eb(-1,null,[" entry styles to consume the new "])),(l()(),e.Ma(213,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["clr-ui-dark.min.css"])),(l()(),e.Ma(215,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.La(216,4243456,null,0,i.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.Ma(217,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Custom Themes"])),(l()(),e.Ma(219,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["If you need to customize components for you application we suggest starting with either the light theme or the dark theme and override variables from there to suite your customizations."])),(l()(),e.Ma(221,0,null,null,31,"clr-tabs",[],null,null,null,o.lb,o.O)),e.bb(512,null,t.Dd,t.Dd,[]),e.bb(512,null,t.Yc,t.Yc,[]),e.bb(512,null,t.hd,t.hd,[]),e.bb(1024,null,t.fd,t.gd,[]),e.La(226,1097728,null,1,t.ub,[t.Dd,t.Yc,t.hd,t.fd],null,null),e.cb(603979776,1,{tabLinkDirectives:1}),e.La(228,8404992,null,0,t.id,[],null,null),(l()(),e.Ma(229,0,null,0,11,"clr-tab",[],null,null,null,o.kb,o.M)),e.bb(1024,null,t.Bd,t.Cd,[]),e.La(231,180224,null,2,t.qb,[t.Dd,t.Bd,t.hd],null,null),e.cb(335544320,2,{tabLink:0}),e.cb(603979776,3,{tabContent:0}),e.bb(512,null,t.ed,t.ed,[]),(l()(),e.Ma(235,16777216,null,0,3,"button",[["clrTabLink",""]],[[8,"id",0],[1,"aria-selected",0],[1,"aria-controls",0],[2,"btn",null],[2,"btn-link",null],[2,"nav-link",null],[2,"nav-item",null],[2,"active",null],[1,"role",0],[1,"type",0]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Wa(l,236).activate()&&a),a},null,null)),e.La(236,16384,[[2,4],[1,4]],0,t.sb,[t.Dd,t.Bd,t.ed,e.k,e.j,e.O,t.fd],null,null),e.La(237,2244608,null,0,t.jd,[e.h,[2,t.id],t.Bd,t.Dd],null,null),(l()(),e.eb(-1,null,["Light Theme Base"])),(l()(),e.Ea(16777216,null,0,1,null,C)),e.La(240,147456,null,0,t.Da,[t.Dd,t.Bd,e.L,e.O],{active:[0,"active"]},null),(l()(),e.Ma(241,0,null,0,11,"clr-tab",[],null,null,null,o.kb,o.M)),e.bb(1024,null,t.Bd,t.Cd,[]),e.La(243,180224,null,2,t.qb,[t.Dd,t.Bd,t.hd],null,null),e.cb(335544320,4,{tabLink:0}),e.cb(603979776,5,{tabContent:0}),e.bb(512,null,t.ed,t.ed,[]),(l()(),e.Ma(247,16777216,null,0,3,"button",[["clrTabLink",""]],[[8,"id",0],[1,"aria-selected",0],[1,"aria-controls",0],[2,"btn",null],[2,"btn-link",null],[2,"nav-link",null],[2,"nav-item",null],[2,"active",null],[1,"role",0],[1,"type",0]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Wa(l,248).activate()&&a),a},null,null)),e.La(248,16384,[[4,4],[1,4]],0,t.sb,[t.Dd,t.Bd,t.ed,e.k,e.j,e.O,t.fd],null,null),e.La(249,2244608,null,0,t.jd,[e.h,[2,t.id],t.Bd,t.Dd],null,null),(l()(),e.eb(-1,null,["Dark Theme Base"])),(l()(),e.Ea(16777216,null,0,1,null,k)),e.La(252,147456,null,0,t.Da,[t.Dd,t.Bd,e.L,e.O],{active:[0,"active"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,205,0,u.uiNodeImports,!0),l(n,216,0,u.uiWebpackImports,!0),l(n,240,0,null),l(n,252,0,null)},function(l,n){l(n,0,0,!0),l(n,235,0,e.Wa(n,236).tabLinkId,e.Wa(n,236).active,e.Wa(n,236).ariaControls,!0,!e.Wa(n,236).inOverflow,!e.Wa(n,236).inOverflow,!e.Wa(n,236).inOverflow,e.Wa(n,236).active,e.Wa(n,236).role,e.Wa(n,236).type),l(n,247,0,e.Wa(n,248).tabLinkId,e.Wa(n,248).active,e.Wa(n,248).ariaControls,!0,!e.Wa(n,248).inOverflow,!e.Wa(n,248).inOverflow,!e.Wa(n,248).inOverflow,e.Wa(n,248).active,e.Wa(n,248).role,e.Wa(n,248).type)})}var D=e.Ia("clr-themes-demo",w,function(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"clr-themes-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,x,v)),e.La(1,49152,null,0,w,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),S=u("Ip0R"),U=u("gIcY"),L=u("ZYCi"),I=u("XPsC"),W=u("JsA7");u.d(n,"ThemesDemoModuleNgFactory",function(){return A});var A=e.Ja(a,[],function(l){return e.Ta([e.Ua(512,e.j,e.Z,[[8,[o.Bb,o.b,o.Ab,D]],[3,e.j],e.v]),e.Ua(4608,S.p,S.o,[e.s,[2,S.F]]),e.Ua(4608,U.A,U.A,[]),e.Ua(4608,t.dc,t.dc,[]),e.Ua(5120,t.ad,t.bd,[[3,t.ad]]),e.Ua(1073742336,S.b,S.b,[]),e.Ua(1073742336,U.x,U.x,[]),e.Ua(1073742336,U.j,U.j,[]),e.Ua(1073742336,t.Ca,t.Ca,[]),e.Ua(1073742336,t.ec,t.ec,[]),e.Ua(1073742336,t.Ad,t.Ad,[]),e.Ua(1073742336,t.U,t.U,[]),e.Ua(1073742336,t.d,t.d,[]),e.Ua(1073742336,t.W,t.W,[]),e.Ua(1073742336,t.n,t.n,[]),e.Ua(1073742336,t.Gd,t.Gd,[]),e.Ua(1073742336,t.Id,t.Id,[]),e.Ua(1073742336,t.N,t.N,[]),e.Ua(1073742336,t.Y,t.Y,[]),e.Ua(1073742336,t.Pa,t.Pa,[]),e.Ua(1073742336,t.ic,t.ic,[]),e.Ua(1073742336,t.Sc,t.Sc,[]),e.Ua(1073742336,t.F,t.F,[]),e.Ua(1073742336,t.ob,t.ob,[]),e.Ua(1073742336,t.Eb,t.Eb,[]),e.Ua(1073742336,t.u,t.u,[]),e.Ua(1073742336,t.Ua,t.Ua,[]),e.Ua(1073742336,t.Oa,t.Oa,[]),e.Ua(1073742336,t.i,t.i,[]),e.Ua(1073742336,t.j,t.j,[]),e.Ua(1073742336,t.pb,t.pb,[]),e.Ua(1073742336,t.q,t.q,[]),e.Ua(1073742336,t.Sa,t.Sa,[]),e.Ua(1073742336,t.Xa,t.Xa,[]),e.Ua(1073742336,t.cd,t.cd,[]),e.Ua(1073742336,t.vb,t.vb,[]),e.Ua(1073742336,t.Kb,t.Kb,[]),e.Ua(1073742336,t.La,t.La,[]),e.Ua(1073742336,t.gb,t.gb,[]),e.Ua(1073742336,t.Bb,t.Bb,[]),e.Ua(1073742336,t.bb,t.bb,[]),e.Ua(1073742336,t.Pb,t.Pb,[]),e.Ua(1073742336,t.a,t.a,[]),e.Ua(1073742336,L.o,L.o,[[2,L.t],[2,L.l]]),e.Ua(1073742336,I.a,I.a,[]),e.Ua(1073742336,W.a,W.a,[]),e.Ua(1073742336,a,a,[]),e.Ua(1024,L.j,function(){return[[{path:"",component:w}]]},[])])})}}]);