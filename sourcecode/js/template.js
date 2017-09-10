function ret(){
  var nav = 
'          <li><a href="./index.html">首页</a></li>'+
'          <li class="dropdown">' +
'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">产品与服务<span class="caret"></span></a>' +           
'            <ul class="dropdown-menu" role="menu">'+
'              <li><a href="./virtualScreen.html">虚拟筛选 </a></li> '+
'              <li><a href="./md.html">动力学模拟 </a></li> '+
'              <li><a href="./docking.html">分子对接 </a></li> '+
'              <li><a href="./pharm.html">药效团筛选 </a></li> '+
'              <li><a href="./model.html">同源建模 </a></li> '+
'              <li><a href="./valid.html">实验验证 </a></li> '+
'              <li><a href="./paper.html">论文服务 </a></li> '+
'            </ul>'+
'          </li>'+
'          <li class="dropdown"> '+
'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">客户与案例<span class="caret"></span></a> '+
'            <ul class="dropdown-menu" role="menu"> '+
'              <li><a href="./cooperation.html">合作客户</a></li> '+
'              <li><a href="./case.html">经典案例</a></li> '+
'            </ul> '+
'          </li> '+
'          <li><a href="./training.html">常见问题</a></li> '+
'          <li class="dropdown"> '+
'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">关于我们 <span class="caret"></span></a> '+
'            <ul class="dropdown-menu" role="menu"> '+
'              <li><a href="./company.html">公司简介</a></li> '+
'              <li><a href="./culture.html">公司文化</a></li> '+
'              <li><a href="./join.html">加入我们</a></li> '+
'              <li><a href="./contact.html">联系我们</a></li> '+
'            </ul> '+
'          </li> '+
'          <li class="contact"> '+
'            <img src="img/tel.png" width="40" height="40"> '+
'            <span class="tel">4000181609</span>'+
'          </li> ';

  var footer = 
'       <ul> '+
'            <li class="footer-title">关于我们</li> '+
'            <li><a href="./company.html">公司简介</a></li> '+
'            <li><a href="./culture.html">公司文化</a></li> '+
'            <li><a href="./join.html">加入我们</a></li> '+
'            <li><a href="./contact.html">联系我们</a></li> '+
'        </ul> '+
'        <ul>  '+
'            <li class="footer-title">科技服务</li> '+
'            <li><a href="./virtualScreen.html">虚拟筛选 </a></li> '+
'            <li><a href="./md.html">动力学模拟 </a></li> '+
'            <li><a href="./docking.html">分子对接 </a></li> '+
'            <li><a href="./pharm.html">药效团筛选 </a></li> '+
'            <li><a href="./model.html">同源建模 </a></li> '+
'            <li><a href="./valid.html">实验验证 </a></li> '+
'            <li><a href="./paper.html">论文服务 </a></li> '+
'        </ul>';

  return {
    'nav' : nav,
    'footer' : footer
  }
}  
