var posts=["2024/10/14/2024年职业院校中职组ZZ052大数据应用与服务赛项赛题02/","2023/10/09/ECharts-可视化/","2024/12/02/11月底学习总结/","2024/10/07/Hadoop-HDFS基础语法/","2024/11/29/JavaScript从入门到实践/","2024/11/28/ECharts用法/","2024/11/12/Linux下配置NTP时钟同步服务/","2024/10/12/Java基础/","2024/11/22/MapReduce在大数据集群中充当了什么样的角色/","2024/10/08/Markdown基本语法/","2024/10/08/Markdown扩展语法/","2024/10/07/MySQL基础语法/","2024/12/04/MySQL增删改查练习题/","2024/12/03/MySQL数据库解决中文插入/","2024/10/07/Pandas的基础用法(国赛03)/","2024/10/09/Python可视化笔记/","2023/12/07/Python-Requests数据爬取/","2024/10/18/Python 编程从入门到实践/","2023/11/19/Python-scrapy数据爬取/","2024/10/09/SQL注入漏洞讲解/","2024/10/09/Python基础笔记/","2024/10/10/SmithLegend-MC版沙威玛/","2023/09/26/Spark编写-第一部分-2/","2023/10/06/Spark编写-3/","2024/11/15/Linux基础笔记/","2023/09/25/Spark编写-第一部分-1/","2024/11/20/Typora激活教程/","2024/10/08/spark完全分布式部署/","2024/12/02/佛祖保佑，永无Bug注释/","2024/10/18/关于举办全国中等职业学校信息技术应用能力大赛决赛通知/","2024/01/19/国赛题-第三套题/","2024/01/23/国赛题-第七套题/","2024/01/21/国赛题-第五套题/","2024/01/24/国赛题-第八套题/","2024/01/25/国赛题-第十套题/","2024/01/22/国赛题-第六套题/","2024/11/18/大数据国赛第十套整合文档/","2024/01/20/国赛题-第四套题/","2024/11/26/解决数据库无法插入中文/","2024/11/16/谈谈不学习你只能干什么？/","2024/10/08/大数据应用与服务基础环境搭建/","2024/10/13/全国中等职业学校信息技术应用能力大赛大数据应用与服务赛项初赛/","2024/12/09/MapReduce中的数据类型/","2024/12/13/我在哪，家就在哪/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };