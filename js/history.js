(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("fd9b6f64-7333-4173-ac15-26caa528128d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd9b6f64-7333-4173-ac15-26caa528128d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"088f416b-9cf3-4cb5-8d72-1c4adddc1c9c":{"roots":{"references":[{"attributes":{},"id":"8787f5d6-3560-40f1-968b-f5317cb7fd97","type":"DatetimeTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"82ba67e0-f95e-4048-878e-632b63528dac","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},"ticker":{"id":"3bad6265-20db-4d7e-9943-aaeb64c43c3b","type":"BasicTicker"},"visible":false},"id":"dca95b48-e860-4df9-a9f1-f32aa689ce16","type":"Grid"},{"attributes":{},"id":"2df89efc-7954-4658-8706-69b6fb598041","type":"ToolEvents"},{"attributes":{"days":[1,15]},"id":"8cbd138c-12f9-487e-bdf5-f433c0166c53","type":"DaysTicker"},{"attributes":{"months":[0,6]},"id":"01a5d200-f35f-47ca-90c6-b698973460e8","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"e12bed75-68b7-4a6c-a648-0da5e7de8070","type":"ColumnDataSource"},"glyph":{"id":"ea363204-bda5-42cd-80f9-8aab36d71670","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"b2231f83-16d5-4cc7-b968-ba6cb268078c","type":"Quad"},"selection_glyph":null},"id":"63750f41-1de5-4861-bcff-041e02ff313f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"}},"id":"31f045fc-6c7b-43da-ac0d-b511d4f1d005","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"deg","value":45},"level":"glyph","plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},"source":{"id":"95bdbb31-8fa6-4964-b96c-f6f3a626de4a","type":"ColumnDataSource"},"text":{"field":"proj"},"text_font_size":{"value":"9pt"},"x":{"field":"date"},"y":{"field":"y"},"y_offset":{"value":1}},"id":"c1557929-d27b-4353-bde7-746c502934c5","type":"LabelSet"},{"attributes":{"callback":null,"column_names":["x","y","index","project","line_color","fill_color"],"data":{"fill_color":["#f5eef6","#eae6f1","#dbdaeb","#cacee5","#b4c4df","#9cb9d9","#81aed2","#63a2cb","#4295c3","#2685bb","#0c74b2","#0567a2","#045b8f","#034a74"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"line_color":["#f5eef6","#eae6f1","#dbdaeb","#cacee5","#b4c4df","#9cb9d9","#81aed2","#63a2cb","#4295c3","#2685bb","#0c74b2","#0567a2","#045b8f","#034a74"],"project":["","Hospital Billing System","Document Management System","Data Center Migration","CDR Datamart Support and Maintainance ","ETL Migration","XBOX (USSD personalization)","Zero charge event","CDR ASN.1 coversion migration","Event Management Platform","Cisco IPCC-Phase 1","Cisco IPCC-Phase 2","Cisco IPCC-Phase 3","Genesys IPCC "],"x":[[1009843200000.0,1009843200000.0,1012521600000.0,1014940800000.0,1017619200000.0,1020211200000.0,1022889600000.0,1025481600000.0,1028160000000.0,1030838400000.0,1033430400000.0,1036108800000.0,1038700800000.0,1101859200000.0,1109635200000.0,1112313600000.0,1114905600000.0,1117584000000.0,1133395200000.0,1388534400000.0,1391212800000.0,1393632000000.0,1396310400000.0,1398902400000.0,1401580800000.0,1446336000000.0,1448928000000.0,1451606400000.0,1454284800000.0,1456790400000.0,1459468800000.0,1462060800000.0,1464739200000.0,1472688000000.0,1475280000000.0,1477958400000.0,1480550400000.0,1480550400000.0],[1041379200000.0,1041379200000.0,1044057600000.0,1046476800000.0,1049155200000.0,1051747200000.0,1054425600000.0,1057017600000.0,1059696000000.0,1062374400000.0,1064966400000.0,1067644800000.0,1070236800000.0,1072915200000.0,1075593600000.0,1078099200000.0,1080777600000.0,1083369600000.0,1086048000000.0,1088640000000.0,1091318400000.0,1093996800000.0,1096588800000.0,1099267200000.0,1099267200000.0],[1104537600000.0,1104537600000.0,1107216000000.0,1107216000000.0],[1120176000000.0,1120176000000.0,1122854400000.0,1125532800000.0,1128124800000.0,1130803200000.0,1130803200000.0],[1136073600000.0,1136073600000.0,1138752000000.0,1141171200000.0,1143849600000.0,1146441600000.0,1149120000000.0,1151712000000.0,1154390400000.0,1157068800000.0,1159660800000.0,1162339200000.0,1164931200000.0,1167609600000.0,1170288000000.0,1172707200000.0,1175385600000.0,1177977600000.0,1180656000000.0,1183248000000.0,1185926400000.0,1188604800000.0,1191196800000.0,1193875200000.0,1196467200000.0,1199145600000.0,1201824000000.0,1204329600000.0,1207008000000.0,1209600000000.0,1212278400000.0,1214870400000.0,1217548800000.0,1220227200000.0,1222819200000.0,1225497600000.0,1228089600000.0,1230768000000.0,1233446400000.0,1235865600000.0,1238544000000.0,1241136000000.0,1243814400000.0,1246406400000.0,1249084800000.0,1251763200000.0,1254355200000.0,1257033600000.0,1257033600000.0],[1259625600000.0,1259625600000.0,1262304000000.0,1264982400000.0,1267401600000.0,1270080000000.0,1272672000000.0,1275350400000.0,1275350400000.0],[1277942400000.0,1277942400000.0,1280620800000.0,1283299200000.0,1285891200000.0,1288569600000.0,1291161600000.0,1293840000000.0,1296518400000.0,1298937600000.0,1301616000000.0,1304208000000.0,1306886400000.0,1306886400000.0],[1309478400000.0,1309478400000.0,1312156800000.0,1314835200000.0,1317427200000.0,1320105600000.0,1322697600000.0,1325376000000.0,1328054400000.0,1330560000000.0,1333238400000.0,1335830400000.0,1338508800000.0,1338508800000.0],[1341100800000.0,1341100800000.0,1343779200000.0,1346457600000.0,1349049600000.0,1351728000000.0,1354320000000.0,1356998400000.0,1359676800000.0,1362096000000.0,1362096000000.0],[1364774400000.0,1364774400000.0,1367366400000.0,1370044800000.0,1372636800000.0,1375315200000.0,1377993600000.0,1380585600000.0,1383264000000.0,1385856000000.0,1385856000000.0],[1404172800000.0,1404172800000.0,1406851200000.0,1409529600000.0,1412121600000.0,1414800000000.0,1414800000000.0],[1417392000000.0,1417392000000.0,1420070400000.0,1422748800000.0,1425168000000.0,1427846400000.0,1427846400000.0],[1430438400000.0,1430438400000.0,1433116800000.0,1435708800000.0,1438387200000.0,1441065600000.0,1443657600000.0,1443657600000.0],[1467331200000.0,1467331200000.0,1470009600000.0,1470009600000.0]],"y":[[1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09],[1e-09,0.10493280163957515,0.17251290369652483,0.2543704953146855,0.34883919198396773,0.45399588346286535,0.5676998827571801,0.6698471496748317,0.7583582603047696,0.8314313836795337,0.8875789617327007,0.9256579916913522,0.9448932943163848,0.9448932943163848,0.9256579916913523,0.8875789617327009,0.8314313836795338,0.7583582603047696,0.6698471496748317,0.5676998827571802,0.4539958834628655,0.34883919198396784,0.8793704951896856,1.422512903446525,1e-09],[1e-09,1.3030059248893395,1.2677893554091608,1e-09],[1e-09,0.30177669592163686,0.3017766959216369,0.3017766959216369,0.3017766959216369,0.3188372991378047,1e-09],[1e-09,0.3153546169017063,0.2578038096909623,0.2531353650853904,0.3527356374219508,0.4677518967297388,0.5976478841135973,0.7247573613011463,0.848487685108598,0.968261967650103,1.0835217659303777,1.1937296855637363,1.2983718863547864,1.3969604780586204,1.489035795150356,1.574168539998002,1.6519617844461942,1.7220528204784804,1.7841148513295304,1.8378585151625082,1.8830332342075324,1.9194283830709102,1.9468742707679512,1.7175714455165878,1.7296777014959657,1.6657250749556527,1.66805358844657,1.586142413282522,1.5722904515145921,1.5991163996858295,1.5221927021544817,1.4753912029936367,1.481323498766531,1.4163965540414893,1.5741685399980025,1.489035795150356,1.3969604780586204,1.2983718863547866,1.1937296855637363,1.083521765930378,0.9682619676501031,0.7976236819704395,0.6907156991520849,0.9691444538855125,1.569235095401324,2.536599884769572,3.8335986850120936,6.329600172129589,1e-09],[1e-09,7.982669638235296,8.776570261077524,8.065544734808283,8.065544734808283,6.701096741901504,5.35723085750082,4.14281910340722,1e-09],[1e-09,3.156245897552571,2.4774375336984433,2.1613870284555134,2.233698914133835,2.6885149116860942,3.066389698738223,3.1958438290453066,3.066389698738223,2.688514911686094,2.233698914133835,1.9853041804296196,1.9634541747628012,1e-09],[1e-09,2.169919054645518,2.587972263403592,3.1837456163216094,3.908973099546711,4.704901095356914,5.366181972791891,5.592726700829287,5.119665985680639,4.704901095356915,4.049839377842426,2.5879722634035924,1.9634541747628012,1e-09],[1e-09,2.480214901245086,2.6885149116860942,2.9255234204425085,3.1958438290453066,2.925523420442508,2.688514911686094,5.403190178474919,10.495577933094458,28.398429807463806,1e-09],[1e-09,50.39909184093199,60.49158551024961,65.82427695726894,71.9064861535194,68.99376822161003,60.49158551024961,50.258225562636284,39.12273434160079,27.987243120565296,1e-09],[1e-09,3.017766953591369,3.017766953591369,3.017766953591369,3.9016504299495534,5.151650429824553,1e-09],[1e-09,6.035533906182738,5.151650429824553,3.9016504299495534,3.642766953466369,4.725298708071917,1e-09],[1e-09,6.173946986194282,5.548946986194281,4.665063509836096,4.665063509836096,4.665063509836095,4.040063509961095,1e-09],[1e-09,1.25000000075,1.25000000075,1e-09]]}},"id":"7bed596d-797f-40c8-8264-81b90122ef19","type":"ColumnDataSource"},{"attributes":{},"id":"8a2887f0-d8a4-4dc7-9c9d-e79fd7c0bd6a","type":"YearsTicker"},{"attributes":{"callback":null},"id":"3fc2024e-bfca-47ed-a7f4-3a79c23aa159","type":"DataRange1d"},{"attributes":{"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"}},"id":"bb5b5569-c949-4a15-ba6f-de7bf94d77f7","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1","desc","line_color","fill_color"],"data":{"desc":["Bsc Aerospace Engineering","Magister Teknologi Informasi","Neoview Essential","Oracle BI Suite (Hyperion) And Essbase","Business Object","Ab-Initio Introduction ","Ab-Initio Advance ","Ab-Initio Environment Suite (AIES) administration","Stanford's Machine Learning"],"fill_color":["#e3eef9","#d0e1f2","#b7d4ea","#94c4df","#6aaed6","#4a98c9","#2e7ebc","#1764ab","#084a91"],"line_color":["#e3eef9","#d0e1f2","#b7d4ea","#94c4df","#6aaed6","#4a98c9","#2e7ebc","#1764ab","#084a91"],"x0":[746841600000.0,946684800000.0,1167609600000.0,1199145600000.0,1230768000000.0,1262304000000.0,1275350400000.0,1356998400000.0,1451606400000.0],"x1":[909878400000.0,1038700800000.0,1167609600000.0,1199145600000.0,1230768000000.0,1262304000000.0,1275350400000.0,1356998400000.0,1451606400000.0],"y0":[1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09,1e-09],"y1":[-20.0,-20.0,-20.0,-20.0,-20.0,-20.0,-20.0,-20.0,-20.0]}},"id":"e12bed75-68b7-4a6c-a648-0da5e7de8070","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"deg","value":-25},"level":"glyph","plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},"source":{"id":"e12bed75-68b7-4a6c-a648-0da5e7de8070","type":"ColumnDataSource"},"text":{"field":"desc"},"text_font_size":{"value":"9pt"},"x":{"field":"x0"},"x_offset":{"value":-25},"y":{"field":"y1"}},"id":"8817b251-d68a-4f03-9589-713c8b340498","type":"LabelSet"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"86789b39-0d3b-4793-afe5-71020002fe77","type":"AdaptiveTicker"},{"attributes":{"bottom":{"field":"y0"},"fill_color":{"field":"fill_color"},"left":{"field":"x0"},"line_color":{"field":"line_color"},"right":{"field":"x1"},"top":{"field":"y1"}},"id":"ea363204-bda5-42cd-80f9-8aab36d71670","type":"Quad"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","logo":null,"tools":[{"id":"45c8ac78-037c-46e1-9b13-a403ed25295d","type":"PanTool"},{"id":"31f045fc-6c7b-43da-ac0d-b511d4f1d005","type":"WheelZoomTool"},{"id":"bc1b44de-afec-4d5e-a4e3-1c22e3086587","type":"BoxZoomTool"},{"id":"bb5b5569-c949-4a15-ba6f-de7bf94d77f7","type":"SaveTool"},{"id":"5d650d8d-572f-4a91-bb19-181258fcfd62","type":"ResetTool"},{"id":"fde1b4a2-1ee2-4557-b9bd-69c0ed34e8aa","type":"HelpTool"}]},"id":"159e4c9a-e764-47d9-bf12-d93af12f13a1","type":"Toolbar"},{"attributes":{"data_source":{"id":"7bed596d-797f-40c8-8264-81b90122ef19","type":"ColumnDataSource"},"glyph":{"id":"c00a091f-f856-4d2a-b441-a30abcab8af8","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"a7724dd5-3921-48e3-b3da-698097f1f087","type":"Patches"},"selection_glyph":null},"id":"70eb0eba-3e03-4f8d-9c09-e52fe06878fa","type":"GlyphRenderer"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"cb3296f3-ccb8-4f98-857d-89fce332eab7","type":"DaysTicker"},{"attributes":{},"id":"3c704110-8d45-4439-833f-2bdc70a4aecb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbf72f8d-078d-4650-b3da-66775b306234","type":"DatetimeTicker"},"visible":false},"id":"daf4f19f-f458-42e4-8f17-4a0fe499cee6","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"x"},"ys":{"field":"y"}},"id":"a7724dd5-3921-48e3-b3da-698097f1f087","type":"Patches"},{"attributes":{"bottom":{"field":"y0"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"x0"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x1"},"top":{"field":"y1"}},"id":"b2231f83-16d5-4cc7-b968-ba6cb268078c","type":"Quad"},{"attributes":{"overlay":{"id":"193cab7b-cdc8-4017-bfeb-c29dd89f33ac","type":"BoxAnnotation"},"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"}},"id":"bc1b44de-afec-4d5e-a4e3-1c22e3086587","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"193cab7b-cdc8-4017-bfeb-c29dd89f33ac","type":"BoxAnnotation"},{"attributes":{"num_minor_ticks":5},"id":"bbf72f8d-078d-4650-b3da-66775b306234","type":"DatetimeTicker"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"bbfca350-be87-4db6-88e6-1b3bdf1fb4f4","type":"AdaptiveTicker"},{"attributes":{"background_fill_alpha":{"value":0},"background_fill_color":{"value":null},"below":[{"id":"6cbd761b-a0f2-4625-9d4e-dbdcf0251d9c","type":"DatetimeAxis"}],"border_fill_color":{"value":null},"left":[{"id":"9acb7c0e-7631-40b2-8de3-6cf7d1f43e83","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":400,"plot_width":1000,"renderers":[{"id":"6cbd761b-a0f2-4625-9d4e-dbdcf0251d9c","type":"DatetimeAxis"},{"id":"daf4f19f-f458-42e4-8f17-4a0fe499cee6","type":"Grid"},{"id":"9acb7c0e-7631-40b2-8de3-6cf7d1f43e83","type":"LinearAxis"},{"id":"dca95b48-e860-4df9-a9f1-f32aa689ce16","type":"Grid"},{"id":"193cab7b-cdc8-4017-bfeb-c29dd89f33ac","type":"BoxAnnotation"},{"id":"70eb0eba-3e03-4f8d-9c09-e52fe06878fa","type":"GlyphRenderer"},{"id":"63750f41-1de5-4861-bcff-041e02ff313f","type":"GlyphRenderer"},{"id":"c1557929-d27b-4353-bde7-746c502934c5","type":"LabelSet"},{"id":"8817b251-d68a-4f03-9589-713c8b340498","type":"LabelSet"}],"sizing_mode":"scale_width","title":{"id":"82ba67e0-f95e-4048-878e-632b63528dac","type":"Title"},"tool_events":{"id":"2df89efc-7954-4658-8706-69b6fb598041","type":"ToolEvents"},"toolbar":{"id":"159e4c9a-e764-47d9-bf12-d93af12f13a1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3fc2024e-bfca-47ed-a7f4-3a79c23aa159","type":"DataRange1d"},"y_range":{"id":"022239ac-dddf-485c-8395-a0ad02b06c16","type":"Range1d"}},"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":100,"start":-75},"id":"022239ac-dddf-485c-8395-a0ad02b06c16","type":"Range1d"},{"attributes":{},"id":"3bad6265-20db-4d7e-9943-aaeb64c43c3b","type":"BasicTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"43e8802e-18c5-488a-8761-bc6bf895a664","type":"MonthsTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"de7b82ba-5933-4a08-8652-541ef866b929","type":"AdaptiveTicker"},{"attributes":{"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"}},"id":"45c8ac78-037c-46e1-9b13-a403ed25295d","type":"PanTool"},{"attributes":{"days":[1,8,15,22]},"id":"eb0bd6da-ad48-4846-923b-3c34b867c01a","type":"DaysTicker"},{"attributes":{"formatter":{"id":"3c704110-8d45-4439-833f-2bdc70a4aecb","type":"BasicTickFormatter"},"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},"ticker":{"id":"3bad6265-20db-4d7e-9943-aaeb64c43c3b","type":"BasicTicker"},"visible":false},"id":"9acb7c0e-7631-40b2-8de3-6cf7d1f43e83","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["date","y","index","proj"],"data":{"date":[1070236800000.0,1104537600000.0,1125532800000.0,1196467200000.0,1204329600000.0,1262304000000.0,1293840000000.0,1325376000000.0,1349049600000.0,1372636800000.0,1409529600000.0,1422748800000.0,1435708800000.0,1467331200000.0],"index":[1070236800000.0,1104537600000.0,1125532800000.0,1196467200000.0,1204329600000.0,1262304000000.0,1293840000000.0,1325376000000.0,1349049600000.0,1372636800000.0,1409529600000.0,1422748800000.0,1435708800000.0,1467331200000.0],"proj":["Hospital Billing System","Document Management System","Data Center Migration","CDR Datamart Support and Maintainance ","CDR Datamart Expansion","ETL Migration","XBOX (USSD personalization)","Zero charge event","CDR ASN.1 coversion migration","Event Management Platform","Cisco IPCC-Phase 1","Cisco IPCC-Phase 2","Cisco IPCC-Phase 3","Genesys IPCC "],"y":[1.0,5.0,1.0,2.0,2.0,11.877857302571194,3.959285767523731,6.92875009316653,3.959285767523731,35.9532430767597,10.0,10.0,10.0,5.0]}},"id":"95bdbb31-8fa6-4964-b96c-f6f3a626de4a","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"x"},"ys":{"field":"y"}},"id":"c00a091f-f856-4d2a-b441-a30abcab8af8","type":"Patches"},{"attributes":{"axis_label":"year","formatter":{"id":"8787f5d6-3560-40f1-968b-f5317cb7fd97","type":"DatetimeTickFormatter"},"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbf72f8d-078d-4650-b3da-66775b306234","type":"DatetimeTicker"}},"id":"6cbd761b-a0f2-4625-9d4e-dbdcf0251d9c","type":"DatetimeAxis"},{"attributes":{"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"}},"id":"5d650d8d-572f-4a91-bb19-181258fcfd62","type":"ResetTool"},{"attributes":{"months":[0,4,8]},"id":"763ea05d-aeac-4440-b49f-d613d791c335","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"7a33695f-ecf6-4c0a-89eb-ea3b3f625cfc","type":"MonthsTicker"},{"attributes":{"plot":{"id":"008cd952-eaee-4486-82bc-7bff488b7850","subtype":"Figure","type":"Plot"}},"id":"fde1b4a2-1ee2-4557-b9bd-69c0ed34e8aa","type":"HelpTool"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"22dd23e7-df2b-49a0-86d3-b630a1ec5a07","type":"DaysTicker"}],"root_ids":["008cd952-eaee-4486-82bc-7bff488b7850"]},"title":"Bokeh Application","version":"0.12.4"}};
                var render_items = [{"docid":"088f416b-9cf3-4cb5-8d72-1c4adddc1c9c","elementid":"fd9b6f64-7333-4173-ac15-26caa528128d","modelid":"008cd952-eaee-4486-82bc-7bff488b7850"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
