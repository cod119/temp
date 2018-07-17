var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var controller = require("../controllers");
var fs = require("fs");

// var renderer = function(containerDir, mainDir) {
//   var container = fs.readFileSync(containerDir , "utf8");
//   var main = fs.readFileSync(mainDir , "utf8");
//   var rendered = container.replace("<%temp%>", main);
//   return rendered;
// };

router.get("/", function(req, res) {
  res.render("index", {js: "index.html.js"});
});
router.get("/list", function(req, res) {
  var list = controller.boardlist.list(1);
  res.render("boardlist", {list: list, js: "boardlist.html.js"});
});
router.get("/detail/:id", function(req, res) {
  var target = controller.boardlist.find(req.params.id);
  // res.send(target);
  res.render("detail", {el: target, js: "detail.html.js"});
});
// router.get("/apply", function(req, res) {
//   var target = controller.boardlist.find(req.params.id);
//   res.render("apply", {js: "apply.html.js"});
// })
router.get("/apply/result", function(req, res) {
  res.render("result", {js: "result.html.js"});
})
router.get("/apply/confirmed", function(req, res) {
  res.render("confirmed", {js: "confirmed.html.js"});
})
router.get("/apply/:id", function(req, res) {
  var target = controller.boardlist.find(req.params.id);
  res.render("apply", {el: target, js: "apply.html.js"});
})
router.post("/apply/:id", function(req, res) {
  // console.log("apply post")
  res.redirect("/apply/result");
})

router.get("/support", function(req, res) {
  res.render("notfound", {js: "support.html.js"});
})
router.get("/mall", function(req, res) {
  res.render("notfound", {js: "mall.html.js"});
})
router.get("/mypage", function(req, res) {
  res.render("notfound", {js: "mypage.html.js"});
})
// router.get("/players", function(req, res) {
//   res.render("players", {js: "players.html.js"});
// });
// router.get("/request", function(req, res) {
//   res.render("request", {js: "request.html.js"});
// });
// router.get("/mypage", function(req, res) {
//   res.render("mypage", {js: "mypage.html.js"});
// });
// router.get("/login", function(req, res) {
//   res.render("login", {js: "login.html.js"});
// });
// router.get("/signup", function(req, res) {
//   res.render("signup", {js: "signup.html.js"});
// });
// router.get("/signupdone", function(req, res) {
//   res.render("signupdone", {js: "signupdone.html.js"});
// });

// router.post("/login", function(req, res) {
//   console.log(req)
// })
// router.post("/signup", function(req, res) {
//   console.log(req)
// })
// router.post("/request", function(req, res) {
//   console.log(req)
// })
// // router.get("/result", function(req, res) {
// //   res.render("result", {idols: controller.result.idols(req.query)});
// // })
// // router.get("/quicksearch", function(req, res) {
// //   req.query.name = req.query.term;
// //   res.send(controller.result.idols(req.query));
// // })
// // router.get("/admin", function(req, res) {
// //   res.render("login");
// // });
// // router.get("/success", function(req, res) {
// //   res.render("success");
// // });
// // router.get("/error", function(req, res) {
// //   res.render("error");
// // });

// router.post("/admin", function(req, res) {
//   var userinfo = req.body;
//   // console.log(req.body)
//   // console.log(global.admin)
//   // console.log(req.session.userinfo);
  
//   if (controller.admin.checkUser(req.session.userinfo, global.admin)) {
//     console.log("already login")
//     res.render("admin");
//   } else if (controller.admin.checkUser(userinfo, global.admin)) {
//     console.log("new login")
//     req.session.userinfo = userinfo;
//     res.render("admin");
//   } else {
//     console.log("need login")
//     res.render("login");
//   }
// });
// router.post("/upload", function(req, res) {
  
//   console.log("file")
  
//   var form = new formidable.IncomingForm();
//   form.uploadDir = __dirname + "/../upload";
//   // 파일 전송 시 첫번째 chunk가 전달되면 호출
//   form.on('fileBegin', function(name, file) {
//     console.log('fileBegin - ' + name + ':' + JSON.stringify(file));
//   })
//   // 파일의 chunk가 전달될 때 마다 호출
//   .on('progress', function(bytesReceived, bytesExpected) {
//     console.log('progress: ' + bytesReceived + '/' + bytesExpected);
//   })
//   // 파일 전송도중 esc나 페이지 전환 등으로 중단될 때 호출
//   .on('aborted', function() {
//     console.log('aborted');
//     res.render("error");
//   })
//   // error 발생 시 호출
//   .on('error', function() {
//     console.log('error');
//     res.render("error");
//   })
//   // 파일 전송이 끝난 경우 호출
//   .on('end', function() {
//     console.log('end');
//   });
  
//   form.parse(req, function(err, fields, files) {
//     console.log('parse - ' + JSON.stringify(files), err, fields);
    
//     if (err === null) {
//       var type = files.json.type;
//       var oldpath = files.json.path;
//       var filename = files.json.name;
//       var newpath = "";
      
//       if (type === "image/jpeg") {
//         newpath += __dirname + "/../public/images/cardpicture/";
//         fs.rename(oldpath, newpath + filename, function(err) {
//           if (err) {
//             res.render("error");
//           } else {
//             res.render("success");
//           }
//         });
        
//       } else if (type === "application/octet-stream" && filename.indexOf("json") > 0) {
//         newpath += __dirname + "/../db/";
//         fs.rename(oldpath, newpath + "namuami.json.js", function(err) {
//           /* Load DB */
//           // console.log(global.db)
//           var db = require("../db");
//           global.db = db.idols();
          
          
//           if (err) {
//             res.redirect("/error");
//           } else {
//             res.redirect("/success");
//           }
//         });
//       }
//     }
//   });
  
  
// })


/**/

// router.get("/voca", function(req, res) {
//   var containerDir = __dirname + "/../public/container.html";
//   var mainDir = __dirname + "/../public/voca.html";
//   var page = renderer(containerDir, mainDir);
//   res.send(page);
// });

module.exports = router;
