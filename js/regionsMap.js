google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsJapanMap);
google.charts.setOnLoadCallback(drawRegionsMap);

//https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=ja
function drawRegionsJapanMap() {
    var data = google.visualization.arrayToDataTable([
    	['都道府県', 'Level'],
		['北海道', 3],//都道府県コード1	
        ['青森', 0],//都道府県コード2
        ['岩手', 0],//都道府県コード3
        ['宮城', 0],//都道府県コード4
        ['秋田', 0],//都道府県コード5
        ['山形', 0],//都道府県コード6
        ['福島', 3],//都道府県コード7
        ['茨城', 1],//都道府県コード8
        ['栃木', 3],//都道府県コード9
        ['群馬', 3],//都道府県コード10
        ['埼玉', 3],//都道府県コード11
        ['千葉', 3],//都道府県コード12
        ['東京', 3],//都道府県コード13
        ['神奈川', 3],//都道府県コード14
        ['新潟', 0],//都道府県コード15
        ['富山', 0],//都道府県コード16
        ['石川', 3],//都道府県コード17
        ['福井', 0],//都道府県コード18
        ['山梨', 3],//都道府県コード19
        ['長野', 3],//都道府県コード20
        ['岐阜', 0],//都道府県コード21
        ['静岡', 3],//都道府県コード22
        ['愛知', 3],//都道府県コード23
        ['三重', 0],//都道府県コード24
        ['滋賀', 2],//都道府県コード25
        ['京都', 3],//都道府県コード26
        ['大阪', 3],//都道府県コード27
        ['兵庫', 3],//都道府県コード28
        ['奈良', 2],//都道府県コード29
        ['和歌山', 0],//都道府県コード30
        ['鳥取', 2],//都道府県コード31
        ['島根', 0],//都道府県コード32
        ['岡山', 3],//都道府県コード33
        ['広島', 3],//都道府県コード34
        ['山口', 3],//都道府県コード35
        ['徳島', 2],//都道府県コード36
        ['香川', 3],//都道府県コード37
        ['愛媛', 3],//都道府県コード38
        ['高知', 3],//都道府県コード39
        ['福岡', 3],//都道府県コード40
        ['佐賀', 0],//都道府県コード41
        ['長崎', 0],//都道府県コード42
        ['熊本', 0],//都道府県コード43
        ['大分', 0],//都道府県コード44
        ['宮崎', 0],//都道府県コード45
        ['鹿児島', 0],//都道府県コード46
        ['沖縄', 0],//都道府県コード47
    ]);

    // 表示オプション
    var options = {
        region: 'JP',
        resolution: 'provinces',
        colorAxis: {
            values: [0, 1, 2, 3],
            colors: ['white', 'greenyellow', 'yellow', 'red']
        },
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_japan_div'));
    chart.draw(data, options);
}

// https://ja.wikipedia.org/wiki/ISO_3166-1
function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country'],
        ['Japan'],		// 日本	
        ['Guam'],		// グアム
        ['Northern Mariana Islands'],	// サイパン
        ['China'],		// 中国
        ['Taiwan'],		// 台湾
        ['Thailand'],	// タイ
        ['Indonesia'],	// インドネシア
        ['Singapore'],	// シンガポール
        ['Malaysia'],	// マレーシア
        // ['Lao People\'s Democratic Republic'],
        ['LA'],			// ラオス	(なぜか"ISO-3166-1"表記では表示されない)
        ['VietNam'],	// ベトナム
        ['Uzbekistan'],	// ウズベキスタン
        ['Cambodia'],	// カンボジア
        ['India'],		// インド
        ['Myanmar'],	// ミャンマー
        ['Malawi'],		// マラウイ
        ['KR']		    // 韓国	(なぜか"ISO-3166-1"表記では表示されない)
    ]);

    // 表示オプション
    var options = {
    		defaultColor: '#006699',
    		datalessRegionColor: '#D9D9D9',
    };
    
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}
