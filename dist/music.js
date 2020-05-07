const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#20c3ff',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "前前前世",
        artist: 'RADWIMPS',
        url: 'https://drive.google.com/uc?export=download&id=1MJsGgodLNQ-sW6xaGUPCeEFrM5KDTISe',
        cover: '/music/cover/前前前世.jpg',
		lrc: '/music/lyrics/前前前世.lrc',
		theme: '#3c586e'
      },
      {
        name: 'Butter-Fly',
        artist: '和田光司 (By コバソロ & 七穂)',
        url: 'https://drive.google.com/uc?export=download&id=1MsP1LkJj8K5k_Dq7kwYGJDbRbXSN4mfP',
        cover: '/music/cover/Butter-Fly.jpg',
		lrc: '/music/lyrics/Butter-Fly.lrc',
		theme: '#60affe'
      },
      {
        name: 'Catch the Moment',
        artist: 'LiSA',
        url: 'https://drive.google.com/uc?export=download&id=1tYigvqC9QoUj5JzTFO_RHEuUIqzxHDmu',
        cover: '/music/cover/Catch the Moment.jpg',
		lrc: '/music/lyrics/Catch the Moment.lrc',
		theme: '#1973dc'
      },
	  {
        name: "Baby Don't Know Why",
        artist: 'Ms.OOJA (NC)',
        url: 'https://drive.google.com/uc?export=download&id=1mRjlDRVX3hZAlShGUvfj2KrGO9qaHOpd',
        cover: '/music/cover/Baby Dont Know Why.jpg',
		lrc: '/music/lyrics/Baby Dont Know Why.lrc',
		theme: '#b38972'
      },
	  {
        name: 'LOSER',
        artist: '米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=192n7GXieQ6zrfkrg5HM2YoYsvk8DfuLH',
        cover: '/music/cover/LOSER.jpg',
		lrc: '/music/lyrics/LOSER.lrc',
		theme: '#18131a'
      },
	  {
        name: '打上花火',
        artist: 'DAOKO × 米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=1sBHIt_Pm7tSwtsu-cDOAwR3ba6KgpkNd',
        cover: '/music/cover/打上花火.jpg',
		lrc: '/music/lyrics/打上花火.lrc',
		theme: '#864378'
      },
	  {
        name: '光年之外',
        artist: '鄧紫棋',
        url: 'https://drive.google.com/uc?export=download&id=1uaon36UBGsRO80J1a-VHAe3KUrpuLFrT',
        cover: '/music/cover/光年之外.jpg',
		lrc: '/music/lyrics/光年之外.lrc',
		theme: '#616061'
      },
	  {
        name: '再見',
        artist: '鄧紫棋',
        url: 'https://drive.google.com/uc?export=download&id=1UwfvmmtaGxH56KkOUYqv24F5SslNQFW4',
        cover: '/music/cover/再見.jpg',
		lrc: '/music/lyrics/再見.lrc',
		theme: '#4f1b22'
      },
	  {		
        name: '漂向北方',
        artist: '黃明志 (ft.王力宏)',
        url: 'https://drive.google.com/uc?export=download&id=1J5CVTDt2dhJRnZPTAhkzLwXge-26CUi0',
        cover: '/music/cover/漂向北方.jpg',
		lrc: '/music/lyrics/漂向北方.lrc',
		theme: '#50213d'
      },
	  {
        name: '等你下課',
        artist: '周杰倫 (ft.楊瑞代)',
        url: 'https://drive.google.com/uc?export=download&id=11jThCYn8sx2jWuzu1jaVM2vRHqLhJ0TC',
        cover: '/music/cover/等你下課.jpg',
		lrc: '/music/lyrics/等你下課.lrc',
		theme: '#241e21'
      },
	  {
        name: '告白氣球',
        artist: '周杰倫',
        url: 'https://drive.google.com/uc?export=download&id=1eHvYYqVlSx2T-a6L8GPXAKuz-eCoNkaF',
        cover: '/music/cover/告白氣球.jpg',
		lrc: '/music/lyrics/告白氣球.lrc',
		theme: '#533634'
      },
	  {
        name: 'I Really Like You',
        artist: 'Carly Rae Jepsen (NC)',
        url: 'https://drive.google.com/uc?export=download&id=19jwcHWKAFbOnnvbIpTKxkMSNw-IG5Ld4',
        cover: '/music/cover/I Really Like You.jpg',
		lrc: '/music/lyrics/I Really Like You.lrc',
		theme: '#090b0a'
      },
	  {
        name: '終わりの世界から',
        artist: '麻枝 准×やなぎなぎ',
        url: 'https://drive.google.com/uc?export=download&id=1L1S0-i1B9LpxYLFOrfZW05If3kKauHIx',
        cover: '/music/cover/終わりの世界から.jpg',
		lrc: '/music/lyrics/終わりの世界から.lrc',
		theme: '#2e477e'
      },
	  {
        name: '好想你 2.0',
        artist: '黃明志 (feat.四葉草)',
        url: 'https://drive.google.com/uc?export=download&id=1fCBfoYkBsKm_PmI-Q9yGiFt_uQEtLOo0',
        cover: '/music/cover/漂向北方.jpg',
		lrc: '/music/lyrics/好想你2.0.lrc',
		theme: '#50213d'
      },
	  {
        name: '體面',
        artist: '于文文',
        url: 'https://drive.google.com/uc?export=download&id=1CDk8hM9vikyxLAbsI8Nv1cD5mSbwc50I',
        cover: '/music/cover/體面.jpg',
		lrc: '/music/lyrics/體面.lrc',
		theme: '#4b4f4c'
      },
	  {
        name: '追光者',
        artist: '汪蘇瀧',
        url: 'https://drive.google.com/uc?export=download&id=1eaJv3A9cuAdJY5lv2ys7bbRe3M96oZQa',
        cover: '/music/cover/追光者.jpg',
		lrc: '/music/lyrics/追光者.lrc',
		theme: '#282e39'
      },
	  {
        name: '剛好遇見你',
        artist: '李玉剛',
        url: 'https://drive.google.com/uc?export=download&id=1a04cgWHlXsZaZ9SP27SK_4Ku9_mpnJKF',
        cover: '/music/cover/剛好遇見你.jpg',
		lrc: '/music/lyrics/剛好遇見你.lrc',
		theme: '#dbd6b8'
      },
	  {
        name: 'Faded',
        artist: 'Alan Walker',
        url: 'https://drive.google.com/uc?export=download&id=1oXmEsZiE0AzctsE7yjE11pKw_a4VlhOP',
        cover: '/music/cover/Faded.jpg',
		lrc: '/music/lyrics/Faded.lrc',
		theme: '#a5b199'
      },
	  {
        name: 'TT',
        artist: 'TWICE',
        url: 'https://drive.google.com/uc?export=download&id=1k4vT8n6EXH1kejESQQbreV6E37vpIQQf',
        cover: '/music/cover/TT.jpg',
		lrc: '/music/lyrics/TT.lrc',
		theme: '#fb609e'
      },
	  {
        name: '나팔바지(NAPAL BAJI)',
        artist: 'PSY',
        url: 'https://drive.google.com/uc?export=download&id=1xLqz6K84KVKJWDNYaFPg8ZaSZmNJ7uRz',
        cover: '/music/cover/NAPAL BAJI.jpg',
		lrc: '/music/lyrics/NAPAL BAJI.lrc',
		theme: '#077834'
      },
	  {
        name: 'Break Beat Bark!',
        artist: '神田沙也加',
        url: 'https://drive.google.com/uc?export=download&id=1GbZRNlum1WjsHtXHxRrZh3-LYi7ZXBbx',
        cover: '/music/cover/Break Beat Bark.jpg',
		lrc: '/music/lyrics/Break Beat Bark.lrc',
		theme: '#0b2065'
      },
	  {
        name: 'Wild Rose',
        artist: "May'n (NC)",
        url: 'https://drive.google.com/uc?export=download&id=1APZ-CPaM4puJSkDJ4kHnQmPrsxJkIpe4',
        cover: '/music/cover/Wild Rose.jpg',
		lrc: '/music/lyrics/Wild Rose.lrc',
		theme: '#e6c5cd'
      },
	  {
        name: '布拉格廣場',
        artist: '蔡依林',
        url: 'https://drive.google.com/uc?export=download&id=156_id_AdKKmXWD4i69DWjpfAQ-j9TH29',
        cover: '/music/cover/布拉格廣場.jpg',
		lrc: '/music/lyrics/布拉格廣場.lrc',
		theme: '#7e91c2'
      },
	  {
        name: '說愛你',
        artist: '蔡依林',
        url: 'https://drive.google.com/uc?export=download&id=1AWLgc0xtFrM4vbYBLm27ndan_QjDzhqM',
        cover: '/music/cover/布拉格廣場.jpg',
		lrc: '/music/lyrics/說愛你.lrc',
		theme: '#7e91c2'
      },
	  {
        name: 'My Days',
        artist: '鈴木このみ',
        url: 'https://drive.google.com/uc?export=download&id=1IdeRiWzT7KXMDxo60iZtbJdRO1jAMTMw',
        cover: '/music/cover/My Days.jpg',
		lrc: '/music/lyrics/My Days.lrc',
		theme: '#544093'
      },
	  {
        name: '派對動物',
        artist: '五月天',
        url: 'https://drive.google.com/uc?export=download&id=1QYR-MQRZZO2FmmLvAoZOkUdakoFUx7U-',
        cover: '/music/cover/派對動物.jpg',
		lrc: '/music/lyrics/派對動物.lrc',
		theme: '#5d9b61'
      },
	  {
        name: 'Me and My Broken Heart',
        artist: 'Rixton (NC)',
        url: 'https://drive.google.com/uc?export=download&id=1j-JbMtdnUvZCyIXI4BZv3gBpF6L1NX6L',
        cover: '/music/cover/Me and My Broken Heart.jpg',
		lrc: '/music/lyrics/Me and My Broken Heart.lrc',
		theme: '#414449'
      },
	  {
        name: '幸福了 然後呢',
        artist: 'A-Lin',
        url: 'https://drive.google.com/uc?export=download&id=1aPKdwKYEbmnDR07lcDe0svEj9cfVTfoL',
        cover: '/music/cover/幸福了 然後呢.jpg',
		lrc: '/music/lyrics/幸福了 然後呢.lrc',
		theme: '#e2bf22'
      },
	  {
        name: '帥到分手',
        artist: '周湯豪',
        url: 'https://drive.google.com/uc?export=download&id=1XH4qxHWMVLLvIJk978XMQtZCeViGqjih',
        cover: '/music/cover/帥到分手.jpg',
		lrc: '/music/lyrics/帥到分手.lrc',
		theme: '#919191'
      },
	  {
        name: 'Lemon',
        artist: '米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=1CbWp3q5-a30unNqOpCiCJl_QoIbgSTxR',
        cover: '/music/cover/Lemon.jpg',
		lrc: '/music/lyrics/Lemon.lrc',
		theme: '#bfdcda'
      },
	  {
        name: '學貓叫',
        artist: '小潘潘&小峰峰',
        url: 'https://drive.google.com/uc?export=download&id=1eAj3hkJ3DeT2DBWzw5SEInGWuKbu_Mfz',
        cover: '/music/cover/學貓叫.jpg',
		lrc: '/music/lyrics/學貓叫.lrc',
		theme: '#f5c6de'
      },
	  {
        name: '雨愛',
        artist: '楊丞琳',
        url: 'https://drive.google.com/uc?export=download&id=1jRvGOPniUnc4n4UuFQKlolrcj6tAHaYV',
        cover: '/music/cover/雨愛.jpg',
		lrc: '/music/lyrics/雨愛.lrc',
		theme: '#7a512e'
      },
	  {
        name: '聲聲慢',
        artist: '鄧福如',
        url: 'https://drive.google.com/uc?export=download&id=1AKQhGL1YOnAqcDeiRl9ZlbIC_daZmPEE',
        cover: '/music/cover/聲聲慢.jpg',
		lrc: '/music/lyrics/聲聲慢.lrc',
		theme: '#e73980'
      },
	  {
        name: '稻香',
        artist: '周杰倫',
        url: 'https://drive.google.com/uc?export=download&id=1npCMwhIw-yqflk7q5pQbV6DkncyQl9b2',
        cover: '/music/cover/稻香.jpg',
		lrc: '/music/lyrics/稻香.lrc',
		theme: '#85541b'
      },
	  {
        name: '123我愛你',
        artist: '新樂塵符-賀子玲',
        url: 'https://drive.google.com/uc?export=download&id=15P4vkrFSc4j6JDNv0g_D8HsRuIONTNVZ',
        cover: '/music/cover/123我愛你.jpg',
		lrc: '/music/lyrics/123我愛你.lrc',
		theme: '#9788be'
      },
	  {
        name: '私奔到月球',
        artist: '五月天 (feat.陳綺貞)',
        url: 'https://drive.google.com/uc?export=download&id=1CsspOL4M4pCKAFagfVUcHl3oQRoKk0eX',
        cover: '/music/cover/私奔到月球.jpg',
		lrc: '/music/lyrics/私奔到月球.lrc',
		theme: '#113c37'
      },
	  {
        name: '演員',
        artist: '薛之謙',
        url: 'https://drive.google.com/uc?export=download&id=1zTee-Hu25jKAbCKLKZUeF0BcIsP8bBRH',
        cover: '/music/cover/演員.jpg',
		lrc: '/music/lyrics/演員.lrc',
		theme: '#2f3130'
      },
	  {
        name: '我是誰 我是誰 我是誰',
        artist: 'MP魔幻力量',
        url: 'https://drive.google.com/uc?export=download&id=1OT62l6jGCjSGncjmbYqizhW-iIvkKSZE',
        cover: '/music/cover/我是誰我是誰我是誰.jpg',
		lrc: '/music/lyrics/我是誰我是誰我是誰.lrc',
		theme: '#4b5356'
      },
	  {
        name: '偷偷的',
        artist: 'MP魔幻力量',
        url: 'https://drive.google.com/uc?export=download&id=1BvY-vEt0xFgUujSlw9I4nX0yiJquElMK',
        cover: '/music/cover/偷偷的.jpg',
		lrc: '/music/lyrics/偷偷的.lrc',
		theme: '#121219'
      },
	  {
        name: '感覺犯',
        artist: 'MP魔幻力量',
        url: 'https://drive.google.com/uc?export=download&id=10twiA5YE10OXRzZq5HRufZINkRFWgdTA',
        cover: '/music/cover/感覺犯.jpg',
		lrc: '/music/lyrics/感覺犯.lrc',
		theme: '#878b89'
      },
	  {
        name: '沒有如果',
        artist: '梁靜茹',
        url: 'https://drive.google.com/uc?export=download&id=1zK2VxyBPcCtXGvRI_mGlsOtcLEHGVdaU',
        cover: '/music/cover/沒有如果.jpg',
		lrc: '/music/lyrics/沒有如果.lrc',
		theme: '#b9b19f'
      },
	  {
        name: 'Hacking to the Gate',
        artist: '伊藤香奈子',
        url: 'https://drive.google.com/uc?export=download&id=10SoFpZxTQaELkm3vq59rOcRRreuEW__j',
        cover: '/music/cover/Hacking to the Gate.jpg',
		lrc: '/music/lyrics/Hacking to the Gate.lrc',
		theme: '#b09456'
      },
	  {
        name: 'Last Christmas',
        artist: 'Glee Cast',
        url: 'https://drive.google.com/uc?export=download&id=10hpRQ7K3clrVFog3zhpl73mQTqtI9oYO',
        cover: '/music/cover/Last Christmas.jpg',
		lrc: '/music/lyrics/Last Christmas.lrc',
		theme: '#20bf00'
      },
	  {
        name: 'Alone',
        artist: 'Alan Walker',
        url: 'https://drive.google.com/uc?export=download&id=1MHkjL4nIATRJ9z4fPYHU3Fk2Q0L_m3z0',
        cover: '/music/cover/Alone.jpg',
		lrc: '/music/lyrics/Alone.lrc',
		theme: '#3c4748'
      },
	  {
        name: 'Faded (即刻電音版)',
        artist: 'RocketGirls 101 (火箭少女)',
        url: 'https://drive.google.com/uc?export=download&id=10JalP2e5yQ2Fs80CsmfMQ__x0BDgJ0Pv',
        cover: '/music/cover/Faded (即刻電音版).jpg',
		lrc: '/music/lyrics/Faded (即刻電音版).lrc',
		theme: '#3d039b'
      },
	  {
        name: 'Closer (Aash Mehta Flip)',
        artist: 'The Chainsmokers (ft. Halsey)',
        url: 'https://drive.google.com/uc?export=download&id=1ibl8rOSUtyOx6CXyvOz1NJ8KrzVhW_l-',
        cover: '/music/cover/Closer (Aash Mehta Flip).jpg',
		lrc: '/music/lyrics/Closer (Aash Mehta Flip).lrc',
		theme: '#b50302'
      },
	  {
        name: '歐若拉',
        artist: '張韶涵',
        url: 'https://drive.google.com/uc?export=download&id=1S4gUFR75vtxJn5grRKgrHrDLX-7T8by-',
        cover: '/music/cover/歐若拉.jpg',
		lrc: '/music/lyrics/歐若拉.lrc',
		theme: '#73877e'
      },
	  {
        name: '好心分手',
        artist: '盧巧音&王力宏',
        url: 'https://drive.google.com/uc?export=download&id=194_6GlEovMm4BURmKLg852og9O74oyvj',
        cover: '/music/cover/好心分手.jpg',
		lrc: '/music/lyrics/好心分手.lrc',
		theme: '#f5b3b7'
      },
	  {
        name: '小さな恋のうた',
        artist: 'MONGOL800 (By コバソロ & 杏沙子)',
        url: 'https://drive.google.com/uc?export=download&id=1QAQ6XgHgBq48PGwiodumfqhFCowBazxt',
        cover: '/music/cover/小さな恋のうた.jpg',
		lrc: '/music/lyrics/小さな恋のうた.lrc',
		theme: '#b8e0e2'
      },
	  {
        name: 'あとひとつ',
        artist: 'FUNKY MONKEY BABYS (By コバソロ & こぴ)',
        url: 'https://drive.google.com/uc?export=download&id=1uJafY4DsI1YDewaiq1I4iJM9Vbwu3Ku7',
        cover: '/music/cover/あとひとつ.jpg',
		lrc: '/music/lyrics/あとひとつ.lrc',
		theme: '#d19570'
      },
	  {
        name: 'I Believe',
        artist: '范逸臣',
        url: 'https://drive.google.com/uc?export=download&id=1BOybTea8qdLS_YVPPVFw059XwoILa7k6',
        cover: '/music/cover/I_Believe.jpg',
		lrc: '/music/lyrics/I_Believe.lrc',
		theme: '#38a8c1'
      },
	  {
        name: 'Love More',
        artist: '畢書盡',
        url: 'https://drive.google.com/uc?export=download&id=1X7eiXJbW2N0lCnCtRN30_6kmExg2uPzm',
        cover: '/music/cover/Love_More.jpg',
		lrc: '/music/lyrics/Love_More.lrc',
		theme: '#121211'
      },
	  {
        name: '分手後不要做朋友',
        artist: '梁文音',
        url: 'https://drive.google.com/uc?export=download&id=1iDLxIu6KHp-dEq33aiW0XybDR-Y12vTR',
        cover: '/music/cover/分手後不要做朋友.jpg',
		lrc: '/music/lyrics/分手後不要做朋友.lrc',
		theme: '#bddef5'
      },
	  {
        name: '天后',
        artist: '陳勢安',
        url: 'https://drive.google.com/uc?export=download&id=1NaQkD_CHZkPH3NoelCBUNRq3Gv23I3XY',
        cover: '/music/cover/天后.jpg',
		lrc: '/music/lyrics/天后.lrc',
		theme: '#b49a8e'
      },
	  {
        name: '好朋友只是朋友',
        artist: '郁可唯',
        url: 'https://drive.google.com/uc?export=download&id=1WMMzNuMl-tkcLLhJIPtEk2NtGTVJScBR',
        cover: '/music/cover/好朋友只是朋友.jpg',
		lrc: '/music/lyrics/好朋友只是朋友.lrc',
		theme: '#996c57'
      },
	  {
        name: '我懷念的',
        artist: '蕭敬騰',
        url: 'https://drive.google.com/uc?export=download&id=1e1qlKIO7FHa1PWwjf5Bqh3gG_Ip85C-y',
        cover: '/music/cover/我懷念的.jpg',
		lrc: '/music/lyrics/我懷念的.lrc',
		theme: '#050304'
      },
	  {
        name: '家家酒',
        artist: '家家',
        url: 'https://drive.google.com/uc?export=download&id=1SWKgSLk-hjSj57Z_uT5UDacwCpjosEhR',
        cover: '/music/cover/家家酒.jpg',
		lrc: '/music/lyrics/家家酒.lrc',
		theme: '#494540'
      },
	  {
        name: '涼涼',
        artist: '楊宗緯 & 張碧晨',
        url: 'https://drive.google.com/uc?export=download&id=1AWzVIxwlAA1ShCcTo98ASir2_aPMOxro',
        cover: '/music/cover/涼涼.jpg',
		lrc: '/music/lyrics/涼涼.lrc',
		theme: '#e8dddb'
      },
	  {
        name: '猜不透',
        artist: '丁噹',
        url: 'https://drive.google.com/uc?export=download&id=1vyH69RRJL7oru9Sb1JB6Ux4UmOSVlKK2',
        cover: '/music/cover/猜不透.jpg',
		lrc: '/music/lyrics/猜不透.lrc',
		theme: '#012f2f'
      },
	  {
        name: '等一個人',
        artist: '林芯儀',
        url: 'https://drive.google.com/uc?export=download&id=1CpgZR6tFtJYDGCXF9rr4b1eXXA368_uB',
        cover: '/music/cover/等一個人.jpg',
		lrc: '/music/lyrics/等一個人.lrc',
		theme: '#5c6860'
      },
	  {
        name: '勢在必行',
        artist: '陳勢安 & 畢書盡',
        url: 'https://drive.google.com/uc?export=download&id=1wV6pvDUCZgmaQlHx0OrFGkwuuOqg426t',
        cover: '/music/cover/勢在必行.jpg',
		lrc: '/music/lyrics/勢在必行.lrc',
		theme: '#011524'
      },
	  {
        name: '愛你',
        artist: '陳芳語',
        url: 'https://drive.google.com/uc?export=download&id=1oUMbw0x-9B6r7TW-OqUW7wOZAPEFWmE2',
        cover: '/music/cover/愛你.jpg',
		lrc: '/music/lyrics/愛你.lrc',
		theme: '#302220'
      },
	  {
        name: '夢一場',
        artist: '蕭敬騰',
        url: 'https://drive.google.com/uc?export=download&id=1FQSTHFZnfSNfohCALi_6w6PbRv6CxSoE',
        cover: '/music/cover/我懷念的.jpg',
		lrc: '/music/lyrics/夢一場.lrc',
		theme: '#050304'
      },
	  {
        name: '親愛的那不是愛情',
        artist: '張韶涵',
        url: 'https://drive.google.com/uc?export=download&id=1jkkL7yvyrs6Rde18yOKay8ielQxWuD-h',
        cover: '/music/cover/親愛的那不是愛情.jpg',
		lrc: '/music/lyrics/親愛的那不是愛情.lrc',
		theme: '#948c7f'
      },
	  {
        name: '讓我為你唱情歌',
        artist: '蕭敬騰',
        url: 'https://drive.google.com/uc?export=download&id=1_ejsdWgZrEON25wLXHpLtgYhzPe-5Dtu',
        cover: '/music/cover/讓我為你唱情歌.jpg',
		lrc: '/music/lyrics/讓我為你唱情歌.lrc',
		theme: '#6e757d'
      },
	  {
        name: '妄想感傷代償連盟',
        artist: 'YuNi',
        url: 'https://drive.google.com/uc?export=download&id=1LlwfBTmSWMzIVCYXHBmiLrw12AMmIVvi',
        cover: '/music/cover/妄想感傷代償連盟.jpg',
		lrc: '/music/lyrics/妄想感傷代償連盟.lrc',
		theme: '#c94b70'
      },
	  {
        name: "Can't You Say",
        artist: 'Roys',
        url: 'https://drive.google.com/uc?export=download&id=1U8t0jNR4RWXl8oU9Aj4bgUcJCaVBVm2p',
        cover: '/music/cover/Cant You Say.jpg',
		lrc: '/music/lyrics/Cant You Say.lrc',
		theme: '#588d2a'
      },
	  {
        name: '#thatPOWER',
        artist: 'will.i.am (ft. Justin Bieber)',
        url: 'https://drive.google.com/uc?export=download&id=1PZUFBgiqIE-fZ0nT_3ArL98VDb0a-usA',
        cover: '/music/cover/thatPOWER.jpg',
		lrc: '/music/lyrics/thatPOWER.lrc',
		theme: '#030303'
      },
	  {
        name: '不將就',
        artist: '李榮浩',
        url: 'https://drive.google.com/uc?export=download&id=1vlDviUdvQSWugFhe8xapJfBqxrXaUBmk',
        cover: '/music/cover/不將就.jpg',
		lrc: '/music/lyrics/不將就.lrc',
		theme: '#2e4b5d'
      },
	  {
        name: '浪子回頭',
        artist: '茄子蛋',
        url: 'https://drive.google.com/uc?export=download&id=1iRmlu0ZNEysm_tcUVVz1COfnkfzjyPtk',
        cover: '/music/cover/浪子回頭.jpg',
		lrc: '/music/lyrics/浪子回頭.lrc',
		theme: '#f9de1f'
      },
	  {
        name: '浪流連',
        artist: '茄子蛋',
        url: 'https://drive.google.com/uc?export=download&id=1j2BtGH-ZdpK0tL8OkUMPA-fqB247DL-l',
        cover: '/music/cover/浪流連.jpg',
		lrc: '/music/lyrics/浪流連.lrc',
		theme: '#0e0e18'
      },
	  {
        name: 'Happy!!! 運將情歌',
        artist: '茄子蛋',
        url: 'https://drive.google.com/uc?export=download&id=12LA1QEOfAQ699ZfXH-GDNPNkwktGTvq9',
        cover: '/music/cover/Happy!!! 運將情歌.jpg',
		lrc: '/music/lyrics/Happy!!! 運將情歌.lrc',
		theme: '#de2a35'
      },
	  {
        name: 'キセキ',
        artist: '高橋李依',
        url: 'https://drive.google.com/uc?export=download&id=1Irk0h8HwmgShTCuoJvI_SUfI_nwqy1JN',
        cover: '/music/cover/キセキ.jpg',
		lrc: '/music/lyrics/キセキ.lrc',
		theme: '#f8e7aa'
      },
	  {
        name: '小さな恋のうた',
        artist: '高橋李依',
        url: 'https://drive.google.com/uc?export=download&id=1y1zAUF6qxyAAPoZX2pgUgdBNw3pkBbih',
        cover: '/music/cover/小さな恋のうた_高橋李依.jpg',
		lrc: '/music/lyrics/小さな恋のうた_高橋李依.lrc',
		theme: '#ed885b'
      },
	  {
        name: '言わないけどね。',
        artist: '高橋李依',
        url: 'https://drive.google.com/uc?export=download&id=13OBc-0kZRFaw10iEUlmeEhLNoteYC7hF',
        cover: '/music/cover/キセキ.jpg',
		lrc: '/music/lyrics/言わないけどね。.lrc',
		theme: '#f8e7aa'
		
      },
	  {
        name: 'PopLove',
        artist: 'Robin Skouteris',
        url: 'https://drive.google.com/uc?export=download&id=1VSRh3sIWVApHQHm1-1VXsq-3NygoWMkj',
        cover: '/music/cover/PopLove.jpg',
		lrc: '/music/lyrics/PopLove.lrc',
		theme: '#e604e0'
      },
	  {
        name: 'Yearmix 2017',
        artist: 'NEXU',
        url: 'https://drive.google.com/uc?export=download&id=1-5f_V_cr3ExiyLpf45UFjZ4TR7EQdu-s',
        cover: '/music/cover/Yearmix_2017.jpg',
		lrc: '/music/lyrics/Yearmix_2017.lrc',
		theme: '#000002'
      },
	  {
        name: 'Good Time',
        artist: 'Owl City',
        url: 'https://drive.google.com/uc?export=download&id=1p-nPP3LyKJwQO1UOwWvrXSIMH-odK4mu',
        cover: '/music/cover/Good_Time.jpg',
		lrc: '/music/lyrics/Good_Time.lrc',
		theme: '#603d2a'
      },
	  {
        name: '愛上現在的我',
        artist: '閻奕格 (ft. 高爾宣 OSN)',
        url: 'https://drive.google.com/uc?export=download&id=1cZpNnMdaunhWTbPwWvVh8WOcPl5S0lHG',
        cover: '/music/cover/愛上現在的我.jpg',
		lrc: '/music/lyrics/愛上現在的我.lrc',
		theme: '#080403'
      },
	  {
        name: '綠色',
        artist: '陳雪凝',
        url: 'https://drive.google.com/uc?export=download&id=1rQ6zeqd7xakJM89B-G2UzOD0A0kw0ttD',
        cover: '/music/cover/綠色.jpg',
		lrc: '/music/lyrics/綠色.lrc',
		theme: '#5e7354'
      },
	  {
        name: '怎麼了',
        artist: '周興哲',
        url: 'https://drive.google.com/uc?export=download&id=1zce_BHyZDrsK_MFRETj_ct-P-0_-Vuwf',
        cover: '/music/cover/怎麼了.jpg',
		lrc: '/music/lyrics/怎麼了.lrc',
		theme: '#3e3e3e'
      },
	  {
        name: '句號',
        artist: '鄧紫棋',
        url: 'https://drive.google.com/uc?export=download&id=1SHkdqfqc6SG54iC-dNBKjHrbskTWG--a',
        cover: '/music/cover/句號.jpg',
		lrc: '/music/lyrics/句號.lrc',
		theme: '#82454e'
      },
	  {
        name: '來自天堂的魔鬼',
        artist: '鄧紫棋',
        url: 'https://drive.google.com/uc?export=download&id=1EusaUMZHUa15-6t1c76bKT9z8JFLQXpU',
        cover: '/music/cover/再見.jpg',
		lrc: '/music/lyrics/來自天堂的魔鬼.lrc',
		theme: '#4f1b22'
      },
	  {
        name: '太陽',
        artist: '邱振哲',
        url: 'https://drive.google.com/uc?export=download&id=14o_iFbc0_b99TSy3_30o-Wkp-Jes11kJ',
        cover: '/music/cover/太陽.jpg',
		lrc: '/music/lyrics/太陽.lrc',
		theme: '#fef339'
      },
	  {
        name: '年少有為',
        artist: '李榮浩',
        url: 'https://drive.google.com/uc?export=download&id=1DHbVVisK3_EociCnKglfT2bjtMD4O2Fj',
        cover: '/music/cover/年少有為.jpg',
		lrc: '/music/lyrics/年少有為.lrc',
		theme: '#137b8e'
      },
	  {
        name: '奏 (和聲版)',
        artist: '高橋李依 x 雨宫天',
        url: 'https://drive.google.com/uc?export=download&id=1c1YrHvdWhUF-ZMYEyxqQq5eg8Ce63B3A',
        cover: '/music/cover/奏.jpg',
		lrc: '/music/lyrics/奏.lrc',
		theme: '#a68461'
      },
	  {
        name: '生きていたんだよな',
        artist: 'Aimyon',
        url: 'https://drive.google.com/uc?export=download&id=1IggcHU8UHKOfVvKlxgXv8zqZ_ywc2JVx',
        cover: '/music/cover/生きていたんだよな.jpg',
		lrc: '/music/lyrics/生きていたんだよな.lrc',
		theme: '#df192b'
      },
	  {
        name: '心做し',
        artist: '鹿乃',
        url: 'https://drive.google.com/uc?export=download&id=11FcJbQv8zhmhF42QzXPJ_SSNFV4hXk3F',
        cover: '/music/cover/心做し.jpg',
		lrc: '/music/lyrics/心做し.lrc',
		theme: '#283c5b'
      },
	  {
        name: '夜空中最亮的星',
        artist: '逃跑計劃',
        url: 'https://drive.google.com/uc?export=download&id=1kj1EVQiz0VKX-By_j3cEM4AaJzUx5eY8',
        cover: '/music/cover/夜空中最亮的星.jpg',
		lrc: '/music/lyrics/夜空中最亮的星.lrc',
		theme: '#6a79ae'
      },
	  {
        name: '途中',
        artist: '黃美珍',
        url: 'https://drive.google.com/uc?export=download&id=121OFJwywtj2tCbDgCTa0jaecLQxQnzUR',
        cover: '/music/cover/途中.jpg',
		lrc: '/music/lyrics/途中.lrc',
		theme: '#757061'
      },
	  {
        name: 'あの世行きのバスに乗ってさらば。',
        artist: 'ツユ',
        url: 'https://drive.google.com/uc?export=download&id=1CzfPnhSfdxwvEFM4BI9VdLEq7j4UhleD',
        cover: '/music/cover/あの世行きのバスに乗ってさらば。.jpg',
		lrc: '/music/lyrics/あの世行きのバスに乗ってさらば。.lrc',
		theme: '#232a60'
      },
	  {
        name: '願い～あの頃のキミへ～',
        artist: '當山みれい',
        url: 'https://drive.google.com/uc?export=download&id=12wWGwnIkDaJ_WTgJDSpt632j6cSpHZyq',
        cover: '/music/cover/願い～あの頃のキミへ～.jpg',
		lrc: '/music/lyrics/願い～あの頃のキミへ～.lrc',
		theme: '#163472'
      },
	  {
        name: '茜さす',
        artist: 'Aimer',
        url: 'https://drive.google.com/uc?export=download&id=11Iajbd44r2BXFlj9oQ7XNwaQeeMNp4SD',
        cover: '/music/cover/茜さす.jpg',
		lrc: '/music/lyrics/茜さす.lrc',
		theme: '#ec3a36'
      }
    ]
});