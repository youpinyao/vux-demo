<template>
  <view-box ref="viewBox">
    <x-header slot="header"
      :left-options="{backText: ''}"
      :title="title">
    </x-header>
    <scroller lock-x>
      <div>
        <div>{{msg}}{{$route.params.id}}</div>
        <div>
          Abby: 娇小可爱的女人，文静，令人喜爱，个性甜美。 Aimee: 意为可爱的人。 Alisa: 快乐的姑娘的意思。 Angelia: 天使，传送讯息者。Angelia被描绘为美丽，娇小的女子若不是有著甜美温柔的个性，即是活泼莽撞的女孩。
          Amanda: 其词根表示爱的意思。表示可爱的人。人们认为她保守美丽又纤细，甜美富有 Anne: 善良、优雅、喜欢帮助人的女孩.皇室的皇后、公主很多都是这个名字或者ANNIE，许多平民也都很喜欢这个名字。
          Carrie: 给人的感觉是可爱，聪明的金发女孩， 可能有两种极端不同的个性；一个是好玩外向的女孩，另一个则是安静好独处的女子。(同Kerry) Cassie: 可爱，受欢迎的大学女生，快乐而甜美。
          Daisy: 雏菊。森林来的"金发女孩"，甜美可爱。 Fern 寓意勤勉好学又文静 Alice 寓意高贵 Bunny 代表多姿多彩 友善可亲 Belle 寓意优雅漂亮 开朗热情 Estelle
          独立 友好 温馨 Jasmine 具有花朵和芬芳的意向 Iris 高挑 苗条 细致 理想主义者 Emily 娇小 可爱 文静 Ailsa艾丽莎 Aimee艾米 Alice爱丽丝 Alina艾琳娜
          Allison艾莉森 Amanda阿曼达 Amy艾美 Amber安伯 Anastasia阿纳斯塔西娅 (昵称Stacey) Andrea安德莉亚 Angela安吉拉 Angelia安吉莉亚
          Angelina安吉莉娜 Ann安 (Hannah的英文形式) Anne安妮 (同Ann) Annie安妮 (Ann的昵称) Anita安尼塔 (Ann的西班牙写法) Ariel艾莉尔
          April阿普里尔 Ashley艾许莉 Aviva阿维娃 (同Avivahc和Avivi) Barbara笆笆拉 Beata贝亚特 Beatrice比阿特丽斯 (同Beatrix)
          Becky贝基 (Rebecca的昵称) Betty贝蒂 (Elizabeth的昵称) Blanche布兰奇 Bonnie邦妮 Brenda布伦达 (Brandon及Brendan的女性形式)
          Camille卡米尔 Candice莰蒂丝 Carina卡瑞娜 Carmen卡门 Carol凯罗尔 Caroline卡罗琳 Carry凯丽 Carrie凯莉 (Carol及Caroline的昵称，同Kerry)
          Cassandra卡桑德拉 Charlene沙琳 (同Caroline,Charlotte) Charlotte夏洛特 Cherry切莉 Cheryl雪莉尔 (Charlotte的另一形式，亦同Sheryl)
          Chris克莉丝 （Christine，Kristine的简写，同Kris） Christina克里斯蒂娜 (同Christine) Christine克里斯汀 Christy克里斯蒂
          (Christine的简写) Cindy辛迪 (Cinderella,Cynthia,Lucinda的昵称) Claudia克劳迪娅 Clement克莱门特 Cloris克劳瑞丝 Connie康妮
          (Constance的昵称) Constance康斯坦斯 Cora科拉 Corrine科瑞恩 Crystal科瑞斯特尔 (同Krystal) Daisy戴茜 Daphne达芙妮 Darcy达茜
          Debbie黛比 (Deborah，Debra的昵称) Deborah黛博拉 Debra黛布拉 Demi黛米 Diana黛安娜 Dolores德洛丽丝 Donna堂娜 Doris桃瑞丝
          Edith伊迪丝 Editha伊迪萨 Elaine伊莱恩 Eleanor埃莉诺 Elizabeth伊丽莎白 Ella埃拉 Ellen爱伦 Ellie艾莉 (Eleanor, Ellen的昵称)
          Estelle爱斯特尔 Esther爱丝特 Eudora尤杜拉 Eva伊娃 Eve伊芙 Fannie芬妮 (同Frances,Fanny) Fiona菲奥纳 Frances弗郎西丝
          (Francis的女性形式) Frederica弗雷德里卡 Frieda弗里达 Gina吉娜 (Angelina，Regina的昵称) Gillian吉莉安 (Juliana的异体)
          Gladys格拉蒂丝 (Claudia的威尔斯形式) Gloria格罗瑞娅 Grace格瑞丝 Greta格瑞塔 (Margaret的昵称) Gwendolyn格温多琳 Hannah汉娜
          Helena海伦娜 Hellen海伦 (亦作：Helen) Hebe赫柏 Heidi海蒂 (Adalheid, Adelaide的昵称) Ingrid英格丽德 Ishara爱沙拉 Irene艾琳
          Iris艾丽丝 Ivy艾维 Jacqueline杰奎琳 Jamie詹米 (James的女性形式) Jane简 (John的女性名词) Janet珍妮特 (同Jane) Jean姬恩
          (Jane的苏格兰形式) Jessica杰西卡 (Jessee的女子形式) Jessie杰西 (Jasmine, Jessica的昵称; Janet的苏格兰形式) Jennifer詹妮弗
          Jenny詹妮 (同Jennie；Jane,Jennifer的昵称) Jill姬尔 (Gillian的昵称) Joan琼 (同Jane；John的女性形式) Joanna乔安娜 Jocelyn乔斯林
          Josephine约瑟芬 Josie乔茜(同Josephine) Joy乔伊 Joyce乔伊斯 (Josephine的昵称) Judith朱迪丝 Judy朱蒂 (Judith的昵称)
          Julia朱莉娅 Juliana朱莉安娜 Julie朱莉 June朱恩 Kitty基蒂 (Catherine的昵称) Lareina莱瑞拉 Laura劳拉 (Lawrence的女性形式)
          Lena莉娜 (Helena的昵称) Lydia莉迪娅 Lillian莉莲 (亦作lilian) Linda琳达 Lisa丽莎 (Elizabeth的别名) Liz莉兹 (Elizabeth的昵称)
          Vanessa温妮莎 Vicky维姬 (Victoria的昵称) Victoria维多利亚 Vivian薇薇安 Wanda旺达 Wendy温蒂 (Gwendolyn,Wanda的昵称)
          Winnie温妮 Yolanda尤兰达 Yvette伊薇特 (同Yvonne) Yvonne伊温妮 Zoey佐伊 (同Zoe) Beenle 冰清玉洁的名字 10级 Icey 就是“冰”+y，纯净！对不对？
          10级 Angle 天使！神圣之名！活泼者请找Fairy 8级 Diana 黛安娜，不想与女皇同名吗？ 6级 Rose 玫瑰，浓郁馨香之名。 7级 Barbie 芭比，玲珑可爱的娃娃之名
          7级 Moon 月，月亮公主，宁静的银…… 9级 Snowy “雪”+y，比白雪公主Snowhite更可爱！ 8级
        </div>
      </div>
    </scroller>
  </view-box>
</template>

<script>
  import {
    ViewBox,
    Scroller,
    XHeader,
  } from 'vux';

  export default {
    name: 'Second',
    computed: {
      title() {
        return 'Second';
      },
    },
    components: {
      Scroller,
      XHeader,
      ViewBox,
    },
    mounted() {

    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js Second',
      };
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    font-size: 2rem;
    display: block;
  }

</style>
