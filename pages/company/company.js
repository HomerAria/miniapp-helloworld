// pages/company/company.js
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "投行的日与夜",
    source: "阴影之手 2018-07-17 18:26:11",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    /**
     * html解析示例
     */
    var raw = `<P>来源：大力如山</P><P>1984年，专门承担原中国人民银行工商信贷和储蓄业务的中国<a class= \"sh601398\" href = \"stock://sh601398/工商银行\">工商银行</a>，正式成立了。</P><P>成立初始的“宇宙行”，虽说各地分支机构都是在当地人行直接加挂的牌匾，进而能自发的彰显出贵族气质。但其坐落在北京的总行，办公场地却是租用服装厂的闲置厂房，这跟几年前就已相继成立的农行、中行和工行比较起来，实在是太寒酸了。</P><P>不过，工行与服装产业的上游——服装厂所建立的这个缘分，在当年却也成功的延续到了服装产业的下游—卖服装的天桥百货上。</P><P>1984年，曾经在50年代开展的“比、学、赶、帮、超”社会主义劳动竞赛中，获得过“全国第一面商业红旗”殊荣的天桥百货，也许是再也忍受不了自己财务审批权限一直在10元以下的状况，决定进行向自主经营转变的股份制改造工作，在当年帮其股票代理发行的就是工行。</P><P>这个股份制改造工作，除了让天桥百货成为了新中国的首家股份有限公司之外，其当年发行的300万元股票，也成为了新中国的首支“股票”。之所以股票二字上还有着双引号，是因为该纸票不但印上了“信托”二字，在背面更是注明了“五年还本、每年5.4%利息外加分红”的描述，这就让其看起来更像是一张债券了。也正因为此，当年邓公送给纽交所董事长约翰·范尔霖的是作为备选的小飞乐股票，而不是首选的天桥百货股票。</P><P>但无论送出去的是哪一支股票，工行都会觉得自己脸上有光的。毕竟“天桥百货”、“<a class= \"sh600651\" href = \"stock://sh600651/飞乐音响\">飞乐音响</a>”，包括第一支向社会公开发行的股票“延中实业”，都是工行上海市信托投资公司代理发行的。所以，如果把这些股票的发行都看作是IPO的话，那么成立在国内所有券商之前的工行上海市信托投资公司，可以称得上是国内投行的鼻祖了。</P><P>也许有人并不认同工行是国内投行鼻祖的说法，但在抢投行项目上，当时以工行为代表的银行业，那绝对是未来券商们的老师傅了。</P><P>1989年，上海真空电子器件公司要增发18万新股。这个当年上海股市筹资额最高的增发业务，让上海具备股票承销资质的几家金融机构，都各出奇招要成为此次增发的主承销商。这几家机构分别是四大行在上海设立的信托投资公司，申银、万国和海通这三家刚成立没多久的证券公司。</P><img src="https://ww1.sinaimg.cn/large/0065oQSqly1ftdtot8zd3j30ju0pt137.jpg"" alt="wxParse-微信小程序富文本解析组件Logo"><P>虽然这些机构均是上海本地的大关系户，但毕竟还是年轻人更有活力一些，所以这些机构里叫的最响的，只有刚成立的万国和<a class= \"sh600837\" href = \"stock://sh600837/海通证券\">海通证券</a>。万国的管金生、海通的汤仁荣为了争这个主承销商，纷纷向市领导打报告，报告内容虽然各不相同，但意思都是同一个：</P><P>虽然真空电子的IPO和第一次增发，主承销商都是工行上海信托投资公司，但那时上海还没有证券公司，既然我们已经成立了，该给的活儿都不给，还要我们干啥。</P><P>当时正在工行上海信托投资公司任职的阚治东，表面上对万国和海通反映的意见表示赞同，私下里却没少找发行人聊银行贷款展期的问题。在那个农行负责服务农业、中行负责涉外、建行负责预算内建设资金的年代，工行控制着所有工商企业的信贷业务，所以即便真空电子是上海市仪表局的下属企业，但贷款仍只能指望工行。</P><P>就这样，作为甲方的真空电子，被这些乙方搞得哪家都不敢选，就因为选任何一家，就一定会得罪另外几家。最后，这事闹到了当时的监管机构人行上海分行那里。要说，还是在上财当过教授的龚浩成行长会说话，为此事一锤定了音：</P><P>那就折中吧，你们组成承销团都参与。至于牵头主承销商嘛，也别争来争去了，直接给申银证券吧。</P><P>螳螂捕蝉，黄雀在后。隶属于人行上海分行的申银证券，一声不吭的拿下了主承销商角色。没多久，工行上海信托投资公司就把申银证券给收了，彰显出真正的老黄雀本色。</P><P>所以说，国内最早时期的投行业务，几乎都被掌控在银行业的手中，要都往券商投行历史里划拉的话，还真有点名不正言不顺。想想还是从1992年，中国证监会正式成立的时候开始算起吧，毕竟那时的券商投行部门，才觉得天真的要亮了。</P><P>或者说，是天真的觉得要亮了。</P><P>01</P><P>1992年，除了证监会成立之外，国务院在当年还批准了全国九家特大企业改制，允许他们向社会公开发行股票。其中，发行时间最早的那家企业是<a class= \"sh600600\" href = \"stock://sh600600/青岛啤酒\">青岛啤酒</a>，未来也成为了首单申报证监会的IPO项目。</P><img src="https://ww1.sinaimg.cn/large/0065oQSqly1ftdtot8zd3j30ju0pt137.jpg"" alt="wxParse-微信小程序富文本解析组件Logo"><P>当时证监会特意先明确，青岛啤酒的主承销商和保荐机构，将不再由监管机构指定。而是先由地方政府和发行企业自己选定后，再去征得监管机构的批准。嗯，你们想的没错，确实还不如之前直接由监管确定。因为这两个新增有选择权利的单位，让更多的券商高估了自己的关系硬度。记得整个证券行业凡是有主承销资质的券商，当时几乎都闻风而动，其中光进入首轮主承销商竞标的券商，就有三十家之多。</P><P>“这三十家券商托人递到青岛的条子，像雪花一样多，有走上层路线的，有走地方路线的，还有走亲情路线的。”前面这句话可不是我说的，是最终获得此业务的申银证券说的。当然，申银证券的阚治东，当时还说了另外一句话：</P><P>实际上，申银证券没有靠关系，凭的是实力。</P><P>申银证券确实没往青岛递条子，确实凭的也是自己的实力。只是那个实力，应该是指申银向北京证监会那边，派出了自己的副总裁李明山，那位跟随朱相多年的李明山。</P><P>没多久，青岛啤酒这类企业获得IPO申请资质的分配，演变成了一种固定的投行业务配额制度。1993年4月25日，国务院颁布《股票发行与交易管理暂行条例》，标志着“审批制”的正式确立。在“审批制”下，国务院每年会确定一个股票总发行额度，这个总额度会分配给各个省市以及部委，由各省市和部委在各自分到的额度内预选企业，并将预选的结果推荐给证监会进行最终复核，这就是我们常说的“额度管理”。</P><P>当一个行业出现“额度管理”的时候，那么额度转让的市场，就一定会随之出现，只是吃瓜群众们并不知情罢了。就像当年各省市、部级单位都有上市指标可以转让，比如体委、妇联的指标可以转让，西藏的指标可以转让。这才让你们这些新韭菜们，能在哀股寻觅到来自雪域高原地区的摩托生产、啤酒制造等上市企业。</P><P>这种“额度管理”制度的建立，使得券商投行业务的开展，只能去依靠自己与各部委以及地方政府的关系和人脉。那时候的券商投行领导，主要目标不像现在要围着客户转，而是天天围着上市指标转，谁有上市指标就跟谁拼酒拼关系。当然，就像大多数年轻人选女朋友一样，即便你是十项全能，人家最终找的还是胸大的券商。</P><video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video><P>比如那时沪市所在地—上海地区的投行业务，主要就是在申银、万国和海通这几家本土券商之间进行分配。当年的万国证券，先是在为复旦大学的校产公司—复华实业做上市时，因为教委系统没被分到上市名额的原因，最后是“借用”的科委名额。后来又在帮另一家客户—黄浦区房产公司上市时，在国家体改委明确反对房产公司上市的背景下，最终得以成功还是因为“借用”了建委的名额。</P><P>而深市所在地—深圳地区的投行业务，则主要由深圳的券商进行瓜分，特别是1992年才成立的君安证券。这家公司名称中敢用“军”字谐音的券商，其最大股东合能房地产开发有限公司，就是当时广州军区司令部第二部（情报处）的下属公司。而在投行业务的竞争中，敢用军车接送客户展示逼格的君安证券，也算是全国有名的大胸券商之一了。</P><P>至于其他地区的券商，受制于自己上层关系的薄弱，别说开拓沪深两地的业务了，连自己家的地也挡不住沪深券商来撬。就像东北的哈药集团、哈天鹅、<a class= \"sh600867\" href = \"stock://sh600867/通化东宝\">通化东宝</a>等IPO项目，就全被上海的申银证券给撬了去。四川的<a class= \"sh600644\" href = \"stock://sh600644/乐山电力\">乐山电力</a>、<a class= \"sh600839\" href = \"stock://sh600839/四川长虹\">四川长虹</a>、<a class= \"sh600678\" href = \"stock://sh600678/四川金顶\">四川金顶</a>等IPO项目，就全被上海的万国证券给撬了去。而从成立到1998年，君安的投行一共为全国范围内的100余公司提供了上市、再融资服务，一直挣钱挣到那年天选之人的到来。</P><P>所以在“额度管理”这个审批制下券商圈子里，对投行业务的开拓都是这样自嘲的：</P><P>政府部门往外扔一根肉骨头，让几条狗去抢，还有一群小狗只能干看着流口水。</P><P>而肉骨头吃的最多的券商之一申银证券，其当时的执掌者阚治东，未来把上面这句话写进了自己那本《荣辱二十年》的自传里。</P><P>只是没人知道他写这句话，究竟是想表达“荣”还是“辱”的意思。</P><P>02</P><P>随着时间的递进，证监会对投行业务的控制力度也愈发强了。</P><P>1996年，国务院证券委员会公布了《关于1996年全国证券期货工作安排意见》。1997年，证监会下发了《关于做好1997年股票发行工作的通知》。这两个文件将过去投行业务“额度管理”的审批制，变为了“总量控制、限报家数”的审批制，开始除了由国务院规定每年发行的总规模之外，还会额外要求证监会对各省市和部委每年上报的企业数量进行限制，这就是过去所谓的“97指标”。</P><P>这样跟你们说吧，初期的审批制是为了告诉国内所有的券商：“天之所以会亮，那是因为爹给你打手电筒了”。而进化后的“97指标”审批制，补上了这最重要的一句话：</P><P>别忘了谁才是爹。</P><P>爹先给未来埋下一颗种子。1998年，君安证券的张国庆，用超前思路搞的变相MBO增资扩股事发，爹开始出手酝酿国泰证券与君安证券的合并。当年7月，新华通讯社旗下的中国证券报，在以评论员文章形式发布国泰、君安两大公司的合并消息时，用短短的一句话，给君安的失败定下了官方的调子：</P><P>君安证券公司的个别领导人涉嫌违法，目前正在接受司法机关的调查。</P><P>就在<a class= \"sh601211\" href = \"stock://sh601211/国泰君安\">国泰君安</a>启动合并的时候，一位青年才俊被作为种子埋进了投行的历史进程之中。</P><P>高考状元出身又具备海外学习工作背景的姚刚，彼时虽然只有36岁，但在证监会工作那5年里，通过开拓并创立期货部，一直备受历任领导的器重。这让证监会的周正庆主席，在考虑当时中国最大券商国泰君安管理层的时刻，想到了给这位年轻人再压压担子。1998年7月，姚刚兼任国泰和君安合并工作联合委员会副主任，当年8月即被任命为新成立的国泰君安副董事长、总裁。36岁的姚刚，也许此时还没有想到，未来那顶“发审皇帝”的皇冠会戴在他的头上。</P><P>而接着，埋下种子的爹，开始不断的去浇水灌溉。2001年3月17日，证监会宣布取消股票发行“审批制”，正式实施股票发行核准制下的“通道制”，把过去审批制下的地方政府和部委推荐，改为了由券商进行选择和推荐。</P><P>2001年3月29日，中国证券业协会对“通道制”做出了具体解释：</P><P>每家证券公司一次只能推荐一定数量的企业申请发行股票，由证券公司将拟推荐企业逐一排队，按序推荐。所推荐企业每核准一家才能再报一家，即“过会一家，递增一家”（2001年6月24日又调整为“每公开发行一家才能再报一家”，即“发行一家，递增一家”），具有主承销资格的证券公司拥有的通道数量最多8条，最少2条。</P><P>这个券商通道数量的多寡，是参考券商去年承销的上市企业数量决定的。根据其去年承销数量的多寡，再相应的去分配2、4、6、8个通道不等。</P><P>正是“通道制”的实施，让国内券商开始在投行业务上，正式有了自己的话语权。有了话语权的券商，为了自己能更好的发展，琢磨起投行业务时也开始认真起来。而认真的核心原因，在于通道就代表金钱。</P><P>不过，“审批制”只把券商投行队伍的酒量练了出来，突然发现自己的地盘自己可以做主后，一脸懵逼的投行从业者开始各种不适应，经过好长一段时间，才从“酒量就是工作量”的模式中转出来。</P><P>虽然转出来的投行从业者，也没有能力和意愿去选择和推荐企业，但大券商如中信、国君这样的八条通道不够用，最烂的券商也有两条通道可以换钱，可以坐在家里等企业心急火燎找上门要通道收买路钱。</P><P>就像那时刚从省级券商增资扩股改名没多久的某家券商，为了多挣钱敢拒绝把通道给改制完毕后想上市的贝尔公司使用，让吃了闭门羹的贝尔，只能转头找弗兰的小券商要了条跑道，这才能在2003年上市成功。多年后这家出自金陵的券商有了新掌舵者，不知他是否还记得当初自己的面子，会被未来的自家人丢在地上。</P><P>好在“通道制”是个短命制度，否则券商投行也早已膨胀炸了。2001年，国有股减持消息出来崩盘式调整，IPO再次暂停。2001年下半年，监管层开始反思国有股减持，着手股权分置改革、IPO制度等顶层设计。此时的姚刚，也完成了国泰君安的使命，转回证监会发行部担任主任。</P><P>2003年12月，姚刚主持下的《证券发行上市保荐制度暂行办法》的颁布，终于为“保荐制”的进城打开了大门。投行业务从“通道制”转变为“保荐制”，将过去的券商推荐责任真正落实到了保荐代表人个人。</P><P>保代个人话语权的提升，不仅让国内投行从业人均收入水平开始与国际接轨。也催生出了所谓的国内投行“三大业务模式”。</P><P>03</P><P>2002年的<a class= \"sh600030\" href = \"stock://sh600030/中信证券\">中信证券</a>，虽然各项业绩在券商行业里的排名都还可以，但一年前为了税收优惠就把总部从北京搬到深圳的行为，多多少少还是暴露出了一个事实：那就是距离自己成为中国<a class= \"usGS.N\" href = \"stock://usGS.N/高盛\">高盛</a>的梦想还尚远呢，特别是在投行业务上。</P><P>于是在那年春节前的两周，刚刚结束中信证券年度工作会议的王东明，就迫不及待的约了老朋友德地立人吃炸酱面。倒不是中信已经穷到要请客人吃面的地步了，而是请的这位客人虽然是日本籍，但从小跟着担任中日友好使者的父亲举家搬至北京后，从崇文小学、北大附中、北大中文系这一路都在北京城里混，就爱吃老北京炸酱面这一口。</P><P>就这样，俩老北京一边吸溜着炸酱面，一边就把德地立人跳来中信证券助其打造投行业务的事给谈妥了。</P><P>当然了，德地立人后来在接受采访时所描述的跳槽过程，并没有看起来那么顺利。比如对于是否跳去中信证券，德地立人说他事后又咨询了两个人的意见。一位是他在斯坦福大学读硕士时的老师青木昌彦，给出了他“可以直接参与中国经济，但是为国企工作的难度不小，所以主要问题一定要事先沟通清楚”的建议。另一位则是他的朋友武者，武者非常支持他去中信证券，并给出了“你应该随着时代随风飘”的意见。</P><P>相对于张嘴就来的朋友，还是老师的建议要靠谱一些，凡事也确实都要先沟通清楚。就像当时国内的规定，外籍人士是不能担任国有金融机构高管的。所以那次跳槽最终能得以成功，后来还是多亏了中信集团的常振明，为此事让作为国务院下属单位的中信集团，给上级领导写了份报告，详细说明了此次引入国际人才建设国内资本市场的重要性，国务院这才破例出了文，让德地立人成为了新中国里金融机构的第一名外籍高管。</P><P>2002年6月，德地立人被中信证券聘为副总经理兼企业融资委员会主任。而这个企业融资委员会，正是中信证券投行业务“大平台”模式的发源地。</P><P>德地立人到了中信证券后，将企业融资委员会重新划分为：投资银行部、债券承销部、债券销售交易部、资本市场部、并购部和运营部。更重要的，是在投资银行部下面进行了行业分组，比如电力、汽车、金融、通信、交通这五个行业组，每个行业组都盯准行业内的龙头企业，确立了以大型国内企业为中心开展业务的方针。而此时国内的其他券商，还只会按照区域去设立什么上海分部、北京分部，顿时就把中信证券的专业逼格给反衬了出来。</P><P>2003年，在<a class= \"sh600900\" href = \"stock://sh600900/长江电力\">长江电力</a>的IPO项目中，<a class= \"hk03908\" href = \"stock://hk03908/中金公司\">中金公司</a>不敌中信证券，损失上百亿的承销业绩，这是在国内A股市场上，中金公司的地位第一次被撼动。而在之后几年的国内投行业务排名中，中信这种“大平台”式的打法，也让其能够常年稳定的站在最前排。</P><P>但你能把这个成绩，全都归功于此投行模式的建立吗？我倒是觉得，也许2003年只任了一届的总理卸任，对中信成功把中金拉下马的贡献更大。不过，在那个投行业务实施“通道制”的时期，“大平台”模式让中信对自家的通道进行了最大化的利用，也确实在客户关系维系方面比其他券商更加持久。</P><P>记得当时有人问德地立人，说你整的这套投行打法，是想要达到一个什么效果？德地立人是这样回答的：</P><P>现在的上市公司，发行上市是找一家投资银行，之后财务顾问又换一家，增发或配股的时候再换一家，上市公司对于投资银行的忠诚度很低。我们不但要拿到客户的IPO，还要与客户保持长久关系。</P><P>这是一个非常优秀的想法了，毕竟开展投行业务的终极目标，本就是要挣客户一辈子的钱。但一个公司的命运，除了要靠自己的奋斗之外，更要看到历史的进程。</P><P>2003年，中信证券承揽的杭州富通昭和光通信股份有限公司，原本已经过会并计划在当年的9月18日之后就上市。但因公司名称中带着日本侵华时期的“昭和”两字，在加上那年我们受到日本“租借”钓鱼岛、日本首相参拜靖国神社、齐齐哈尔日军遗留化学武器泄露事件的连续刺激下，不仅这单本应成为国内首单外资控股企业上市的业务凉透了，顺带着还影响了中信证券的其他业务，比如有些大户投资者就直接撤走了放在中信的巨额资金。</P><P>几年后，国家发改委又出台了《产业结构调整指导目录》，对于属于该目录中限制类、淘汰类的行业，证监会在其融资、重组方面进行了非常严格的限制。这就让“大平台“模式在实际的运行中，开始经常会因行业受到限制，业务开展也受到了限制。</P><P>倒不是说受到限制的行业，就弄不成事了，毕竟那时中信的背景在哪摆着，这点事还是能办成的。但要是什么业务都要动用上层关系的话，岂不是跟当初要将业务开展打造成稳定模式的目标背道而驰了。所以说，行业划分的这种思路，高级是高级，但要想用的稳，更需要一个稳定的高级市场。</P><P>而国内这个并不稳定的投行业务市场，虽然让“大平台”模式，在市场中的效果大打折扣，却顺势催生出了两个可与“大平台”模式并肩的新投行模式。</P><P>这就是平安证券的“工厂”模式与<a class= \"sz002736\" href = \"stock://sz002736/国信证券\">国信证券</a>的“人海”模式。</P><P>04</P><P>就像我们国内的投行业务本身就是外来品一样，全名被称作“保荐人代表制度”的“保荐制”，其实是源自大英帝国的创业板市场。</P><P>英国之所以会把“保荐制”用到本国的创业板市场上，主要是觉得上创业板的公司资质不如上主板的，所以就通过券商的保荐，为这些上市公司加一道信用增强光环，让投资者们的心里也能多点数。这个“保荐制”的重点，是要明确保荐机构和保荐代表人的责任，并建立责任追究机制。后来，“保荐制”先是被香港学了去，又进一步的传到了我们这。</P><P>2004年3月20日，中国证券业协会组织了第一次保荐代表人考试，当年参加考试的1549人，最终通过了614人。5月10日，首批67家保荐机构与609名保荐代表人完成注册登记，“保荐制”开始正式实施。</P><P>“保荐制”的实施，相当于给了保荐代表人金身加持。再直白点说的话，就是券商作为投行业务的那个“通道”，变为了保荐代表人的签字权。光送签字权还不说，2004年5月17日，证监会同意深交所设立中小企业板块。这就像是当你为了练书法第一次买笔墨的时候，商家说我送你点空白练字纸吧。</P><P>也是在2004那一年，“百万年薪”第一次成为了保代招聘的代名词，后面又逐渐发展成为投行这个职业的代名词。</P><P>但当时已经在平安证券投行部工作了四年的薛荣年，并没有把什么百万年薪放在眼里，毕竟在安徽省财政厅以及省信托公司混了多年的他，自愿选择下海自然是想要更多。就像在当年年末，时任证监会发行部发审委工作处助理调研员的王小石，因涉嫌受贿落马的事，似乎就给他打开了一扇新的大门。只是在王小石一案中，曾在<a class= \"sz000686\" href = \"stock://sz000686/东北证券\">东北证券</a>投行部工作的林碧，也因犯公司人员受贿罪和介绍贿赂罪一同受审的事，却并没有给薛荣年留下太深的印象。</P><P>2005年，在平安证券与<a class= \"sz002223\" href = \"stock://sz002223/鱼跃医疗\">鱼跃医疗</a>签署了《公司改制财务顾问协议》后，时任平安证券分管投行部的副总经理薛荣年带人赴鱼跃医疗，全面推进该公司的改制上市工作。2006年12月25日，深圳世方联在深圳成立，该公司的法定代表人彭萍嫦，是时任深交所发审监管部副总监兼发审委委员冯小树的岳母，持股比例为30%。该公司另一位持股30%的股东朱勤年，则是薛荣年的弟媳。</P><P>2008年4月18日，鱼跃医疗在深交所上市。九年后，冯小树被查，鱼跃医疗的事才随着案情一并被爆了出来。当这类操作被拆穿之后，你会发现还真就没什么技术含量，如果按业内术语来讲的话，这就像是个人版的“直投+保荐”一样。所以，薛荣年最终能在平安证券坐上总经理的位置，凭的还是他在投行业务中独创的“工厂”模式。</P><P>整个投行工作的业务链条，确实可以映射到工厂的生产链条中去。比如投行承揽岗位的工作，就是去获取产品订单。承做岗位的工作，就是把这个产品生产出来。在具体生产的过程中，质控岗位就像是产品质量检测员，他们会在生产的关键节点上，对产品质量进行把关。等到产品完成后，便会交付给销售交易岗，由他们完成销售，最终获取收入。而薛荣年的“聪明”之处，就在于他懂得哪一块应该进行流水线打造，而哪一块又必须抓在自己的手里。</P><P>当年平安证券投行业务的“工厂”模式，是承做端被薛荣年完全下放给中底层员工，而其余各端一直被他牢牢把握在手里。当然，这种分工的背后并不像看起来那么简单，否则就跟任何承揽承做分开的券商没什么两样了。首先平安的承做端并不是简单的下放，而是被系统拆解成了可复制的流水线式操作。其次是在其他各端上，比如项目风险的把控、客户或监管的沟通对接等等，则完全由薛荣年一人掌控，而且被掌控的结果在前后几年里也都比较顺利。</P><P>当时有很多券商跟风去学“工厂”模式，但最终都没能达到平安的效果，我想主要是两方面的原因。一是薛的这种作法，虽然一方面让承做工作有了更强的可替代性，但同时给承做的薪酬待遇水平却并不低。二来虽然其他各端被薛荣年牢牢把控，挤占了其他员工的发挥空间，但在个人努力和技术操作上，他确实每一步都走在了下属前面。而其他券商往往就只学了表面，没学会这种把钱给到位，又愿意为下属出头的管理态度，包括后来把薛荣年踢走的平安证券。</P><P>2010年，平安集团在井冈山开会讨论平安证券投行的降薪问题，对保代的奖金发放和签字费进行改革，大幅削减投行员工工资。随后又将平安证券的投行业务，按照业务制作、风险控制、发行等领域分割成了三个部门。这成为了薛后来带人从平安转战华林证券，并放言“不给平安留下一张纸”的导火索之一，另外的导火索则是陆续被爆出事的万福生科、<a class= \"sz002525\" href = \"stock://sz002525/胜景山河\">胜景山河</a>等投行项目。</P><P>巧的是，平安证券那几年的投行业绩最好的就是在2010年，不仅在整个券商行业里排名第一，更是拉了第二名国信证券6个亿的身位。而这位排名第二的国信证券，正是投行“人海”模式的缔造者。那一年的平安和国信，能取得这个业绩，除了自己独特的业务开展模式之外，作为深圳券商代表的他们，更应该感谢那波深交所给出的“红利”，特别是国信证券。</P><P>2009年10月23日，经国务院同意、证监会批准，深交所正式成立创业板并举行开板仪式。</P><P>国信证券的“人海”模式，顾名思义，那就是狂招人。2010年能把投行队伍扩充到500多人的国信证券，其引进的众多“小团队”负责人们，就像是招了一群小号的薛荣年，正是这群来来去去的小薛荣年们，组成了国信的“人海”模式：每一个团队都出去揽活，谁揽的活谁做，做出来之后就按公司的规矩进行收入分配。</P><P>其实，这个“人海”模式，用的就是很多券商都用过的“大包干”制度。至于为何其他券商的“大包干”制度没能特别出名，国信的“人海”模式却出了名。我想，主要是因为那几年国信的收入分配制度比较优秀，而且大部分的投行团队也比较“自由”。</P><P>所以，当我们再回过头来看，会发现“工厂”模式和“人海”模式所用的手段，其实并没有特别的高明，无非是在分工协作和单兵作战上，进行了不同程度的选择。但之所以都能在当时有所成就，在于两家公司对于员工在“钱”和“自由”上的管理，都有着相近之处。也正是这种“钱”和“自由”管理上的类似，让两家券商最终走到了同一个历史进程中。</P><P>2008年，资本市场“PE腐败”第一案被暴露于世人面前。该案的主角就是在国信证券做了十年投行的李绍武，而其腐败的方式，无非是让家人提前成立一个公司，干起了“直投+保荐”的全套服务。薛荣年用同样套路做的鱼跃医疗，虽然在2008年顺利登陆深交所，多年后也被爆了出来。</P><P>只是可惜的是，号称走“大平台”这种高端模式的中信证券，那几年也没少玩“直投+保荐”的套路，无非他是跟中信金石这个机构一起玩而已。</P><P>05</P><P>从2004年到2014年，投行业务执行“保荐制”的这十年，无疑为中国资本市场的发展输送了一大批优秀中小企业。特别是在股权分置改革完成的背景下，新公司新办法，锁定期完成后就可以减持套现，十年里为“京沪永远涨”输送了一大批有生力量。</P><P>不过，我们资本市场的改革永远都在路上。</P><P>2011年10月，建行董事长升任证监会主席，在上任之初发出了惊天一问“IPO不审行不行？”，于是各路神仙开始翻出国外的先进经验回答说：”海外和尚说了不审也行，注册制嘛。”可惜郭董事长在任期间没有推出注册制的条件，他把这一棒成功交给了中行的肖董事长。</P><P>2013年，肖董事长掌舵证监会后，开始把推陈出新的“注册制”作为自己的核心工作目标之一，并成功取得了全国人大的授权，预备于2015年中启动注册制。可惜人算不如天算，赶上了惊天动地的股灾，除了2015年上半年，以放松盈利要求、提高披露质量的“准注册制”胜利逃亡了一批上市幸运儿外，剩下的公司变成了堰塞湖交给了农行刘董事长。</P><P>以稳定为核心目标的刘董事长，开始发现中国的IPO，不但要审还要从严审核，于是把在姚刚时代担任过发审委员的郭女士推到审核前台，担任正局级发审委员领衔IPO审核，大刀阔斧地通过各种手段成功地把堰塞湖消解，功绩彪炳史册，引起市场一片叫好声。</P><P>但国内股票市场却与美国、香港的牛市走势截然不同，这就又引发了新的惊天一问：“如何让国内投资者分享新经济增长？”而这一问，就让历史的车轮滚到了“邀请制”的脚下。</P><P>以富士康为首的独角兽，不断的被邀请上市。而面临“邀请制”下的僧多粥少、头部券商吃独食的局面，凸显出了国内投行人员的冗余、定价能力的缺失，这让手握CPA、CFA、司法考试合格证的大多数投行从业者，只能在网上刷段子玩儿。</P><P>从“审批制”、“通道制”、“保荐制”，到现在的“邀请制”，未来的“注册制”，国内投行在每一个发展阶段里，很多券商都在不断针对自身投行业务的开展，去建立或创新或稳定的业务发展模式。但目前来看，确实还无人能突破中信“大平台”、平安“工厂”和国信“人海”这三大模式的范围，就像这三大模式究竟是好是坏，最终还是由投行开闸日与新股暂停夜去决定是一样的道理。</P><P>所以，当我们翻遍投行的历史，终究会发现投行从业人员的黑与白，归根结底还是由投行的日与夜所决定的。但牢记“黑夜给了我黑色的眼睛，我却用它寻找光明”这句古老东方谚语的我，一直坚信会有那么一天，有位朋友会在我的耳边说：</P><P>天亮了。</P><P>我只是希望届时那位朋友，护球并不像亨利。</P><P>（阴影之手 大力如山）</P>`;

    //左右两侧的padding不能依靠css中加入样式，否则会把外部view撑出来，导致页面能够左右滑动
    var article = `<div style="margin-top:10px; text-align:center; text-align:justify; padding-left:30rpx; padding-right:30rpx;">` +
      raw +
      `</div>`;

    //image-padding参数为文字的一半尺寸，正好可以对齐
    WxParse.wxParse('article', 'html', article, that, 15);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})