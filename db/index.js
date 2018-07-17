var Sequelize = require('sequelize');

var sequelize = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: './test.sqlite',
});

var output = {};
var models = {}
output.models = models;
output.seq = sequelize;

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

//  MODELS
models.User = sequelize.define('User', {
  idv: Sequelize.STRING,
  password: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING
});

models.Project = sequelize.define("Project", {
  name: Sequelize.STRING,
  startdate: Sequelize.DATE,
  duedate: Sequelize.DATE,
  timespan: Sequelize.STRING,
  cost: Sequelize.INTEGER,
  content: Sequelize.STRING,
  reqtech: Sequelize.STRING,
  reqfunc: Sequelize.STRING,
  reqdesign: Sequelize.STRING,
  reqetc: Sequelize.STRING,
  contact: Sequelize.STRING,
  publicrecruit: Sequelize.BOOLEAN,
  portfoliopublishable: Sequelize.BOOLEAN,
  hasfile: Sequelize.BOOLEAN,
  modified: {type: Sequelize.BOOLEAN, defaultValue: false}
})

models.Projectclass = sequelize.define("Projectclass", {
  name: Sequelize.STRING
})

models.Projectstatus = sequelize.define("Projectstatus", {
  name: Sequelize.STRING
})

models.CommentGroup = sequelize.define("CommentGroup", {
  content: {type: Sequelize.BOOLEAN, defaultValue: true}
})

models.Comment = sequelize.define("Comment", {
  content: Sequelize.STRING
})


models.User.hasMany(models.Project);
models.User.hasMany(models.CommentGroup);
models.User.hasMany(models.Comment);

models.Project.hasOne(models.Projectclass);
models.Project.hasOne(models.Projectstatus);
models.Project.hasMany(models.CommentGroup);

models.CommentGroup.hasMany(models.Comment);

  // SYNC SCHEMA
sequelize
  .sync({force: true})
  .then(function(err) {
    console.log('It worked!');
  }, function (err) {
    console.log('An error occurred while creating the table:', err);
  });
  
// sequelize.sync()
  // .then(() => User.create({
  //   username: 'janedoe',
  //   birthday: new Date(1980, 6, 20)
  // }))
  // .then(jane => {
  //   console.log(jane.get({
  //     plain: true
  //   }));
  // });

module.exports = output;