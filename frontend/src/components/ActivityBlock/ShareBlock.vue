<template>
  <section class="py-5 border-bottom" id="share">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-8">
          <div
            class="share-content"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabindex="0"
          >
            <section
              v-for="record of recordList"
              class="share-items pb-3 mb-4 border-bottom border-secondary"
              :key="record.timestamps"
            >
              <div class="items-title">
                <h5>{{ record.title }}</h5>
              </div>
              <div class="items-foreword mb-4">
                <p v-for="text of record.foreword" class="mb-2" :key="text">
                  {{ text }}
                </p>
              </div>
              <div class="items-content mb-4">
                <p v-for="text of record.content" class="mb-2" :key="text">
                  {{ text }}
                </p>
              </div>
              <div class="items-end">
                <span>{{ record.end }}</span>
              </div>
              <div class="items-img row">
                <img
                  class="col-md-6 col-sm-12"
                  v-for="src of record.image"
                  :src="src"
                  :key="src"
                />
              </div>
            </section>
          </div>
        </div>
         <div class="col-md-4">
          <nav class="share-title navbar navbar-light bg-light p-3 rounded">
            <a class="navbar-brand" href="#share">每月分享會</a>
            <nav class="nav-block nav nav-pills">
              <a
                class="nav-link"
                v-for="(_, year) of shareObj"
                @click="selectYear = year"
                href="#!"
                :key="year"
              >
                {{ year }}
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance, computed } from 'vue';
const { proxy } = getCurrentInstance();
const selectYear = ref(2022);

function imgUrl(src) {
  return ('/public/Image/' + src);
  // return new URL(`../../assets/img/${src}`, import.meta.url).href;
}

const shareObj = ref({
  2022: [
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/04/28第50次分享會 【智慧農業分享會心得】-by楊大德',
      foreword: [
        '這次籌畫了兩個多月的智慧農業分享會，感謝許多長官、師長及學長姊的支持，有幸邀請到當年對於智慧農業有相當政策洞見、實務經驗及拓展成果的產官學研進行精采的交流。雖然活動受疫情影響，減少到場出席人數，但當晚線上線下合計的人數近百人，足見大家對於智慧農業議題的重視!',
      ],
      content: [
        '1. 農委會科技處王仕賢處長，從農委會推動農業科技的架構暢談未來智慧農業的展望，',
        '王處長研析當前氣候變遷、蟲害頻繁、從業人口老化、投資不足、糧食安全等議題，以及農業未來發展須仰賴科技挹注，以更有效率的途徑解決前述發展困境；值得注意的是目前由政府成功推動的6個「智農聯盟」，透過示範場域，達成更環保、節水、節能、節省人力的高效產出，適用範圍包含水稻、蔬菜、養殖等，成果斐然；近期國內農業發展更與淨零碳排政策接軌，期望提升農產效率的同時，也能符應當前的減碳的國際趨勢。透過王處長的介紹，我們得以看到台灣農業發展仍在持續與科技接軌進步中。',
        '2. 農委會農試所蔡致榮副所長，從跨域科技生態系的角度分享台灣農業的未來前景。',
        '副所長從「智農聯盟」實際推動的經驗，談到穩定優質農產品的供銷能力(契作與農企的夥伴關係)、利用資通訊技術建立便捷產銷、品質控管服務(如創新農事服務)，以及建立生產者與消費者的雙向連結溝通(如產品溯源)等，提供不少成功經驗，包含雲嘉南地區的毛豆生產、元進莊家禽養殖戶大規模智慧化產銷，以及麥寮的萵苣產銷專區智慧田間經營能力等，讓我們看到在農作與養殖上善用科技技術改善生產效率的諸多成功案例；展望未來； 副所長強調建立跨域的農業生態系，透過台灣優異的AIOT技術結合多年累積的農業技術發展成果，讓台灣農業有打入國際市場的實力!',
        '3. 資策會蘇偉仁協理，以多年執行農委會「智慧分身」的經驗，以及智慧農業國際化的角度，提供從拓展國際市場及ESG影響力投資的觀察 。 ',
        ' 蘇協理的從食安的角度切入當代對於糧食生產製造過程的關切，以及如何善用科技技術確保農業生產過程的品質監控無虞，從而觸及當前在國內已經逐步成形的 「台灣永續農業智慧科技解決方案共通利用A-team」，從智慧農業示範場域的模組化生產、永續食材供應鏈系統化的產銷系統化，再到建立永續農業智慧科技的品牌化及技術輸出，讓台灣在智慧農業累積的量能可以匯聚為新的產業發展動能 ；農業發展未必是弱勢，也可以是受到國際資金青睞的ESG影響力投資標的，而資策會也可在這領域擔任第三方ESG驗證機構，只要我們能結合現有資源，有效運用，吸引資金投入協助產業升級。',
        '4. 瓜地馬拉大使Willy Gomez分享後疫情時代農業投資的契機 ，',
        '說明疫情帶來國際生產供應鏈的重新布局，以及糧食供應與價格變動的新挑戰，同時也鼓勵台灣的農業新創企業善用台灣與瓜地馬拉的邦交及租稅優惠措施、瓜地馬拉當地廣大的農業用地、優質人力，以及瓜地馬拉與美洲、歐洲國家的自由貿易協定，善用瓜地馬拉作為生產基地，作為快速拓展國際市場的重要跳板。',
        '5. 蕈優生物科技總經理方世文學長，分享台灣智能蕈菇產業典範及國際化發展經驗。',
        '蕈優是台灣智慧農業的標竿企業，在世文學長相當有遠見的擘畫下，從創業的第一天即著眼於國際市場，洞悉國內外客戶的需求，並善用其資通訊的專業背景，不僅不斷強化其生產過程的智能監控技術，尋求更精準與效率的運作，同時也持續推出多品牌(蘑菇部落、方格氏)、多產品(包含開發新品種)的行銷策略(虛實整合)，完全打破傳統蕈菇業的想像 ；此外，蕈優懷抱共好心時代的願景，多年致力於永續環境的循環生態系的生產系統(包含發電、養魚、養菜，乃至畜產飼料等)，因而不僅專注於本業的發展，更持續為台灣智慧農業的創生、進步及國際化，以領航員的角色努力不懈，令人佩服!',
        '6. 峰漁郭洲獎副總經理，分享峰漁養殖技術如何結合AI精進生產，同時也協助其成功打入國際市場。',
        '峰漁雖是創立不到10年的公司，但自劉建伸董事長創業之初即著眼於台灣養殖漁業的發展痛點: 人口老化、欠缺系統性技術傳承，以及低度科技運用，因此積極帶入AI技術提升生產效率；郭洲獎副總經理也基於過去生物工程學的專業與實務經驗，投入台灣養殖漁業技術的改善， 透過更精準的數據建立與掌控，提升漁業養殖生產資源投入的效率，以及品質的控管，成效顯著；因應當前海洋漁撈減產、養殖漁業日受倚重的趨勢，峰漁善於結合AI技術與資深養殖人員的經驗(HI)，打造「AI動態養殖曆」，有效提升養殖效率；期望未來可以持續透過數據累積出具有深度學習能力的AI養殖技術。',
        '7. 滾動律執行總監陳柏宇學長，分享如何善用生質活菌技術促進農業的生產效率。',
        '滾動綠的產品有效恢復土地原有肥力，並避免過度施肥造成土質的劣化，進而在最小影響農業生產的幅度下，有效提升生產效率與農產品的品質。滾動力由相當年輕的創業團隊組成，自始即著眼於國際市場，在疫情期間仍然持續拓展中國、印尼、印度、加拿大、美國等各國市場，且透過不斷創新實驗與突破，證明其技術確能有效協助農戶增產；目前除了持續深化與台灣在地農企的合作外，參與國際交流，更積極設立外國分公司，拓展國際市場，未來前景可期!',
        '8. 綜合座談由陳家聲老師主持，並由台大農學院盧虎生院長引言。盧院長直指當前台灣農業發展的困境，在於長年政府挹注補助下的多數農業生產難以提升效率，尤其是人口老化造成生產技術突破創新有極大的困難，而這些傳統的生產型態占了百分之八十的比例，因此亟待新的資金、技術投入，以鼓勵農業創新並吸引青農投入；盧院長並提及6年前擔任農委會科技處長時倡議的農業4.0，在當年並未獲得普遍支持，但政府這幾年的努力，逐步看到在示範場域的開花成果，期待這股新的趨勢可以帶動農業整體的翻新，也期待各界持續關注智慧農業的發展。',
        '陳家聲老師則從幾位智慧農業經營者的國際化經驗，以及蘇偉仁協理分享資策會推動智慧分身的經驗，總結智慧農業的發展，須要有高維度的戰略思考，也就是放眼國際市場的布局觀點，以及低維度的戰術執行力，也就是進入農業生產實作的細節；唯有結合兩者才能為台灣農業轉型，以及開拓國際市場締造新的突破契機，而蔡副所長所提及的智慧農業生態圈，則為這個契機鋪出一條可能的途徑，值得大家共同努力。',
        '===',
      ],
      end: '後記：經過這一場足足有3個小時的智慧農業洗禮，讓我們對於台灣智慧農業的發展有更深一層的認識，甚至在我腦海裡反覆出現有如在智慧醫療議題類似的觀點：台灣有很優秀的農業育種、栽植、養殖等極為傑出的技術能力（如同我們享譽國際的醫療技術），如能結合同為國際肯定的IT技術，定能為彼此加值，翻轉當前農業普遍面臨的諸多困境，而關鍵就在蔡副所長與陳老師反覆提及智慧農業跨域多元生態圈(或蘇協理所稱的A-team)的建立。 農業其實早已不再是日出而作、日落而息的農事勞動，而是包含了大數據累積、AIOT技術運用、線上線下數位行銷，以及創新農事服務的整合型產業；這場解放我們對於傳統農業想像的智慧農業論壇，引領我們看到新興智慧農業創新的崛起， 期待透過各方的持續努力，可以在不久的未來看到台灣智慧農業獨角獸出現。',
      image: [imgUrl('0dd7b8b0-244c-40d6-979a-58a3d7d6b084.jpg'), imgUrl('b8d6a745-2a7b-475f-b651-a6987acf2431.jpg')],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '2022/03/31第49次分享會，聚焦「智慧零售」議題分享心得~by大德理事長',
      foreword: [
        '這次的分享會邀請到幾位智慧零售/智慧行銷的大咖分享其成功的商業模式，令與會者們相當驚豔!',
        '第一位分享者是騰雲科技董事長梁基文Vincent學長，分享「數位轉型-擁抱智慧零售新時代」的議題。學長一開始深恐多數聽眾對於智慧零售欠缺基礎認識，因此耐心地從產業(善用internet的)數位化到數位轉型談起，進而談到數位優化(也就是運用IOT達到客流、商流、金流一體化)，以及演進至目前的新零售服務智慧化(AIOT，也就是加上AI的運用，讓數位化的零售服務有溫度，可以從大數據了解客戶，推動客戶端的消費需求)，因此，智慧零售已經不只是OMO(整合線上與現下銷售)而已，而是演進至結合Data Tech、FinTech及Retail Tech的數位零售經濟生態系，讓消費者在商場的每一個接觸點，都可以成為收集客戶數據及促進消費的環節，真正形塑出沉浸式的完整銷售體驗。',
        '第二位分享者是騰雲科技副總經理張婷婷學姊，分享「站在巨人的肩膀上騰雲的商業模式」，進一步就騰雲科技實際執行智慧零售的商業模式提供說明，實景展示一條龍新零售完整結合客、商、金流的解決方案，也就是當消費者在商場裡所接觸到的每個不同階層，包含店員、品牌業者，乃至於商場經營者，都具備了銷售前、中、後的完整服務模式，同時讓每個環節所產生的數據，可以再回饋到零售服務的精緻化；此外，張學姐也進一步分享了騰雲科技的成功商業模式，在於選定具有拓展國際市場的可能夥伴(知名日本商場經營集團)，且一路走來戰戰兢兢的為picky的客戶(筆者個人加註)提供最優質的服務，因而打動客戶，將騰雲的智慧零售系統帶入台灣大型商場，甚至擴展至東南亞市場，近期更將受邀將服務推展至高挑戰難度的日本市場。足見騰雲科技一開始就具有開拓國際市場的企圖心，且能在不斷精進自身服務方案的同時，善用合作夥伴的資源，因而能在短時間內達成上櫃的目標，未來的智慧零售生態系發展，相當令人期待。',
        '第三為分享者是騰加數位總經理黃武琪學長，分享「智慧零售通路的變革」，並從智販機談起，說明在疫情的衝擊下，品牌公司已逐漸脫離大型電商，轉而以品牌直營/直售的模式後，直接銷售產品或服務給消費者，藉此收集數據及提供更客製化的靈活產品銷售及服務，因而打造出了解客戶消費需求的「智販機」；此外，透過MPOS系統，讓線上付款與物流更能配合個別客戶的不同需求，如繳納水電、瓦斯費等，從而，智慧零售的最後一哩路將在智販機的廣泛鋪設下完成，畢竟虛實整合後，線上採購的商品總歸還是要落地回到實體通路；因此，智販機與遍布全台的便利商店之間的合作與競爭，將會是下一波實體零售通路值得觀察的發展趨勢。',
      ],
      content: [
        '這次的兩位與談人，第一位是「紅門互動」的張元溢執行長，分享作為一家AI數據公司，如何為客戶提供專屬的顧客數據中心。令人佩服的是，張執行長看到傳統CRM系統的盲點，因此希望協助客戶從第一方數據(客戶自有數據)建立顧客資料平台(CDP)，再進而結合第二方或(其他平台收集的數據)第三方數據(如發票數據)，進而執行顧客身分識別及特徵、偏好描繪，最終達成個人化的精準行銷；換言之，紅們互動成功結合了內部及外部銷售、行為數據，標示出個別顧客的品味偏好，同時也搭配多種不同的行銷劇本方案，協助客戶以更簡便的方式進行精準銷售，讓我們更清楚的看到智慧零售的未來，將大幅推進銷售作業的精緻化，並在消費者可能還不清楚自身消費需求前，就能藉由過去消費行為數據的導引，完成簡便的消費行為，這不僅有助於零售業者的銷售，也可能協助消費者更有效率地完成消費決策。',
        '最後壓軸的則為我們的首席顧問家聲老師，一開始就從最源頭的何謂智慧、何謂零售，何謂具有智慧的零售，重新翻攪我們聆聽了一晚的智慧零售創新；確實，隨著科技的進步與AI大數據的運用，我們似乎被科技驅使著不斷朝向數位化、數位轉型、數位優化，乃至於智慧化的產業轉型，但我們究竟是為何而轉，似乎在不斷追逐求新求變中，也迷失了創造新科技與新商業模式的初衷，喪失了令人感動的原動力。老師暮鼓晨鐘的提醒，確實讓我們在五光十色的科技中，重新沉澱。',
        '這也如同張婷婷學姊在分享過程中，提到騰雲科技創業六年來的點滴，從五位創業元老到目前的180多人大軍，未來還要持續成長與國際化，顯然騰雲科技持續創新，以及為商場業者、品牌商、店員以及消費者打造更友善的零售平台的初衷，仍然是他們持續推動智慧零售的原動力，令人佩服!',
        '此外，此次也很榮幸邀請到全國商業總會許舒博理事長與大家分享「後疫情時代的經濟趨勢與新創發展」。許理事長歷經多年中央民意代表、保險公會理事長，以及多家知名企業的董事，相當熟悉國內外產業發展趨勢，因此從近期的烏俄戰爭談到國際油價、礦產的價格飆升、導致全球性的通膨，對國內外產業的影響；此外，許理事長也回顧過去兩年以來COVID-19疫情的持續影響全球經濟復甦，都造成當前經濟發展的挑戰。台灣有幸在這幾波挑戰下，仍能有不錯的發展，但展望未來，仍須要持續與國際接軌，才能因應新型態的挑戰；此外，新創企業在當前的挑戰下，需要更快地推進數位轉型，善用新穎的商業模式，持續國際化，才能克服挑戰達成目標。感謝許理事長對於新創夥伴們的期許!',
        '同時，我們也很高興在本次的分享會中，完成與社會影響力學院形成合作策略夥伴的MOU簽署儀式；吳嘉沅理事長/學長一直是我相當佩服的前輩，早在2016年就看到了社會價值、社會影響力評價的重要性，因而積極投入多年，並帶領台灣許多願意為社會影響力投注心力的新創企業，獲得國際的肯定。',
      ],
      end: '今晚也特別感謝胡星陽院長的蒞臨指導，以及許多學長姐及來賓的撥冗出席；同時也謝謝在場提供協助的多位義工學長姐的幫忙，今晚的活動才能如此順利圓滿地舉行! 感謝!',
      image: [imgUrl('d1cb48f3-7d4c-4c7b-8d38-38b34622bef5.jpg'), imgUrl('9ca055d8-8fa3-4546-aff4-0f77dd42568e.jpg'), imgUrl('0279c5fb-9ece-415a-b7e5-97ef3ce54842.jpg')],
    },
    {
      timestamps: 1651118400000,
      date: toDate(1651118400000),
      title: '台復會第48次分享會  陳家聲教授的分享',
      foreword: [
        '非常佩服大德理事長的策劃與安排，在新年度的第一場分享會裡，即以ESG的全球重要趨勢作為開場，並邀請了多位貴賓、學長蒞臨分享，',
        '1. 台灣社會影響力研究院理事長吳嘉沅學長：【UNDP SDGs Impact Standards : 企業ESG 策略治理的新趨勢】；',
        '2.數位治理協會理事長陳春山教授：【ESG x 數位治理產業商機】；',
        '3.會計師陳力源學長：【如何加速提升ESG之投資價值】；',
        '4.成真咖啡王國雄董事長，',
        '5.台灣龍盟複合材料副董事長梁仙和等學長，',
        '真材實料的分享企業在ESG方面的理念與實踐！個人的收益良多。',
        '愛地球、愛人、愛生態、多元化，綠色經濟已經成為「普世價值」！推動ESG讓台灣更能融入國際社會！並成為標竿典範，讓世界看見台灣！',
        '產業市場的壓力是驅使企業主動投入ESG的最重要驅力：ESG是全球趨勢、議題：與國際接軌、供應鏈的連結，外部國際壓力；加上綠色金融，透過ESG作為獲得VC、融資等有利的衡量指標。',
      ],
      content: [
        '將ESG從被動、應付遵守，變為主動追求，這種心態的改變讓企業有不一樣的視野，看見新的價值！企業管理者及員工需要放棄過去的「經驗主義」，如何透過前述新思維、方法論的建構：做中學，學中成長，不斷複盤迭代修正！這是現代新典範、新思維建構的推動、執行方法！',
        '改變圍繞「人」做「事」的思維，成為圍繞「事」做「事」，並建立「複盤」的文化。',
        '從產業立場而言，如何獲得產業界的認同！認為這是好的，應該、值得做得！促使企業具有自主驅動力！',
        '我們可以善用ESG架構及衡量指標：ESG理念及架構仍發展中，主要國家只提供「準則」作為推動方向的思考，而非「標準」！不可能訂出全產業共同的一套標準！',
      ],
      end: '「準則」或「建議」只提供方向！只有透過具體的方法論才能廣泛、普世、有效地推動ESG理念架構，發展相關工具，以及具體落實！由每個企業依自身體質而選擇做調整！包含企業集團不同事業部，產業環境及體質不同，很難由董事會指示各事業該如何做！因為ESG是企業全體的作為，因此需要由員工認知在工作上如何融入ESG的想法，而提出創新作為！然後透過持續蒐集作為的數據，分析，進而持續改善！企業因此而能提升整體經營效益，而員工也因為認同ESG的意義，而能夠主動積極投入，一改過去被動、被要求、應付的心態！或淪為作文、作假！唯有認知ESG是每個人、每個企業的文化、生活與工作方式，才能啟動正面、良性的循環！',
      image: [imgUrl('d77f0f85-b029-4a16-bb57-9973e9aaf749.jpg'), imgUrl('9c00f224-5a2c-4840-8e44-8d51fb5885cd.jpg')],
    },
  ],
});

const recordList = computed(() => {
  return shareObj.value[selectYear.value];
});

function toDate() {
  return proxy.dayjs(1651118400000).format('MM/DD');
}
</script>

<style lang="scss" scoped>
$height: calc(80vh);
#share {
  background: darken($color: #fff, $amount: 5);
  .row {
    .share-title {
      height: $height;
      overflow: auto;
      @include Medium() {
        height: auto;
        .navbar-brand {
          top: 0;
          left: 0;
          position: sticky;
        }
        .nav-block {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }
      }
    }
    .share-content {
      overflow: auto;
      overflow: auto;
      height: $height;
      font-size: 16px;
      text-align: justify;
      line-height: 1.3rem;
      padding: 12px;
      @include Small() {
        font-size: 14px;
      }
      .share-items {
        &:last-child {
          border-bottom: 0 !important;
        }
        .items-img {
          row-gap: 10px;
          margin: 10px;
        }
      }
    }
  }
}
</style>
