var posts=["2024/10/07/Hadoop-HDFS基础语法/","2024/10/07/Hadoop完全分布式搭建/","2024/10/07/MySQL+Hive配置/","2024/10/07/MySQL基础语法/","2024/10/07/Pandas的基础用法(国赛03)/","2024/10/07/大数据应用与服务行业赛MySQL配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };