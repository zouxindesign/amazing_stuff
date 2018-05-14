// 添加数据
var GameScore = Bmob.Object.extend("GameScore");
var gameScore = new GameScore();
gameScore.set("score", 1337);
gameScore.save(null, {
  success: function(object) {
    alert("create object success, object id:"+object.id);
  },
  error: function(model, error) {
    alert("create object fail");
  }
});

// 获取一行数据
var GameScore = Bmob.Object.extend("GameScore");
var query = new Bmob.Query(GameScore);
query.get("4edc3f6ee9", {
  success: function(object) {
    // The object was retrieved successfully.
    alert(object.get("score"));
  },
  error: function(object, error) {
    alert("query object fail");
  }
});
// 删除一行数据
var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
    query.get("4edc3f6ee9", {
      success: function(object) {
        // The object was retrieved successfully.
        object.destroy({
          success: function(deleteObject) {
          alert("delete success");
          },
          error: function(GameScoretest, error) {
          alert("delete fail");
          }
        });
      },
      error: function(object, error) {
        alert("query object fail");
      }
    });
    
    // 修改一行数据
    var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
    query.get("4edc3f6ee9", {
      success: function(object) {
        // The object was retrieved successfully.
        object.set("score", 1338);
        object.save(null, {
          success: function(objectUpdate) {
            alert("create object success, object score:"+objectUpdate.get("score"));
          },
          error: function(model, error) {
            alert("create object fail");
          }
        });
      },
      error: function(object, error) {
        alert("query object fail");
      }
    });