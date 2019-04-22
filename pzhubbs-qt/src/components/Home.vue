<template>
  <div class="page">
    <div class="title">好梦向来易醒。</div>
    <div class="article-box">
      <div class="article" v-for="item in articles " :key="item.id">
        <h2>{{item.title}}</h2>
        <p>{{item.introduction}}</p>
        <div class="article-msg">
          <span class="name">{{item.username}}</span>
          <i class="el-icon-time"></i>
          <span class="time">{{item.uptime}}</span>
          <i class="el-icon-edit-outline"></i>
          <span class="comment">{{ item.commentnum ?'评论数:'+item.commentnum : '暂无评论' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "关于web语义化、自定义命名的规范",
          introduction:
            "语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的html结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护",
          username: "xuwei",
          uptime: "2019年4月5日",
          commentnum: 0
        },
        {
          title: "TeamViewer 检测出商业用途的解决办法",
          introduction:
            "TeamViewer可免费提供给任何人用于个人非商业用途 – 我们的大多数用户都能遵守规则，如果我们打算将TeamViewer用于商业用途，需要购买许可证。",
          username: "xuwei",
          uptime: "2019年4月6日",
          commentnum: 5
        },
        {
          title: "关于web语义化、自定义命名的规范",
          introduction:
            "语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的html结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护",
          username: "xuwei",
          uptime: "2019年4月5日",
          commentnum: 0
        },
        {
          title: "关于web语义化、自定义命名的规范",
          introduction:
            "语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的html结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护",
          username: "xuwei",
          uptime: "2019年4月5日",
          commentnum: 0
        },
        {
          title: "关于web语义化、自定义命名的规范",
          introduction:
            "语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的html结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护",
          username: "xuwei",
          uptime: "2019年4月5日",
          commentnum: 0
        },
        {
          title: "关于web语义化、自定义命名的规范",
          introduction:
            "语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的html结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护",
          username: "xuwei",
          uptime: "2019年4月5日",
          commentnum: 0
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.page {
   border-right: 1px solid #dee5e7;
   box-sizing: border-box;
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #dee5e7;
    background-color: #f9f9f9;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .article-box {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 20px 0px 20px;
    .article {
      border-radius: 4px;
      background: #fff;
      padding: 30px;
      margin-bottom: 30px;
      h2 {
        font-size: 22px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      p {
        color: #a0a0a0;
        margin-bottom: 10px;
      }
      .article-msg {
        padding-top: 20px;
        color: #a0a0a0;
        font-size: 13px;
        border-top: 1px solid #dee5e7;
        i{
            padding-left: 8px;
        }
      }
    }
  }
}
</style>
