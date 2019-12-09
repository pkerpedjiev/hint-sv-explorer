
 var testViewConfig =
{
  "editable": true,
  "trackSourceServers": [
    "https://higlass.io/api/v1"
  ],
  "exportViewUrl": "https://higlass.io/api/v1/viewconfs",
  "views": [
    {
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "uid": "view1",
      "initialXDomain": [
        1330023197.368114,
        1970568035.463622
      ],
      "initialYDomain": [
        1841506758.8480794,
        2409912566.633802
      ],
      "tracks": {
        "top": [
          {
            "name": "Chromosome Axis",
            "created": "2017-06-06T17:03:01.273116Z",
            "server": "https://higlass.io/api/v1",
            "tilesetUid": "N12wVGG9SPiTkk03yUayUw",
            "uid": "d8kUTi64S0-8vsW7Y7YX4w",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 515,
            "height": 30,
            "position": "top"
          }
        ],
        "left": [
          {
            "name": "Chromosome Axis",
            "created": "2017-06-06T17:03:01.273116Z",
            "server": "https://higlass.io/api/v1",
            "tilesetUid": "N12wVGG9SPiTkk03yUayUw",
            "uid": "ECU4soplRO-PnCB-RGHTLw",
            "type": "vertical-chromosome-labels",
            "options": {},
            "width": 20,
            "height": 457,
            "position": "left"
          }
        ],
        "center": [
          {
            "uid": "Ihzcos--SWij8O7wPpjI5A",
            "type": "combined",
            "contents": [
              {
                "name": "Rao et al. (2014) K562 MboI (allreps) 1kb",
                "created": "2017-02-03T03:32:35.710182Z",
                "server": "https://higlass.io/api/v1",
                "tilesetUid": "QvdMEvccQuOxKTEjrVL3wA",
                "uid": "V4GTUC_jTGiqp5B5q3VI3g",
                "type": "heatmap",
                "options": {
                  "labelPosition": "bottomRight",
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "maxZoom": null,
                  "colorbarPosition": "topRight",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "heatmapValueScaling": "log",
                  "name": "Rao et al. (2014) K562 MboI (allreps) 1kb",
                  "scaleStartPercent": "0.00000",
                  "scaleEndPercent": "1.00000"
                },
                "width": 515,
                "height": 457,
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ],
                "position": "center"
              },
              {
                "name": "K562_regions.tsv.multires.db",
                "server": "https://resgen.io/api/v1",
                "tilesetUid": "WvGX-d_iTxWFiP47H2qQtQ",
                "uid": "W8E0HpZdRF6tk-IUT5W7Lw",
                "type": "2d-rectangle-domains",
                "height": 457,
                "position": "center",
                "options": {
                  "minSquareSize": 5,
                  "labelColor": "black",
                  "labelPosition": "hidden",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "rectangleDomainFillColor": "grey",
                  "rectangleDomainStrokeColor": "black",
                  "rectangleDomainOpacity": 0.6,
                  "name": "K562_regions.tsv.multires.db"
                },
                "width": 515
              },
              {
                "name": "Chromosome Grid",
                "created": "2017-06-06T17:03:01.273116Z",
                "server": "https://higlass.io/api/v1",
                "tilesetUid": "N12wVGG9SPiTkk03yUayUw",
                "uid": "bWJ0d3_LSQGgDg67g64SgA",
                "type": "2d-chromosome-grid",
                "options": {
                  "lineStrokeWidth": 1,
                  "lineStrokeColor": "grey"
                },
                "width": 20,
                "height": 20,
                "position": "center"
              }
            ],
            "position": "center",
            "options": {},
            "width": 515,
            "height": 457
          }
        ],
        "bottom": [],
        "right": [],
        "whole": []
      },
      "layout": {
        "w": 12,
        "h": 7,
        "x": 0,
        "y": 0,
        "i": "view1",
        "moved": false,
        "static": false
      },
      "genomePositionSearchBoxVisible": true,
      "genomePositionSearchBox": {
        "autocompleteServer": "https://higlass.io/api/v1",
        "chromInfoServer": "https://higlass.io/api/v1",
        "visible": true,
        "chromInfoId": "hg19",
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA"
      }
    },
    {
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv",
      "uid": "YFsuh_3LSouL-_GaY9d7Xg",
      "initialXDomain": [
        -458058948.1763164,
        3509921751.782502
      ],
      "initialYDomain": [
        -237553139.73315394,
        3283548180.424477
      ],
      "tracks": {
        "top": [
          {
            "name": "Chromosome Axis",
            "created": "2017-06-06T17:03:01.273116Z",
            "server": "https://higlass.io/api/v1",
            "tilesetUid": "N12wVGG9SPiTkk03yUayUw",
            "uid": "AhtKA-llRZuJ6kNW8h6g3g",
            "type": "horizontal-chromosome-labels",
            "options": {},
            "width": 515,
            "height": 30,
            "position": "top"
          }
        ],
        "left": [
          {
            "name": "Chromosome Axis",
            "created": "2017-06-06T17:03:01.273116Z",
            "server": "https://higlass.io/api/v1",
            "tilesetUid": "N12wVGG9SPiTkk03yUayUw",
            "uid": "XoDgys-mS-mG9GUUd3iQhA",
            "type": "vertical-chromosome-labels",
            "options": {},
            "width": 20,
            "height": 457,
            "position": "left"
          }
        ],
        "center": [
          {
            "uid": "Ihzcos--SWij8O7wPpjI5A",
            "type": "combined",
            "contents": [
              {
                "name": "Rao et al. (2014) K562 MboI (allreps) 1kb",
                "created": "2017-02-03T03:32:35.710182Z",
                "server": "https://higlass.io/api/v1",
                "tilesetUid": "QvdMEvccQuOxKTEjrVL3wA",
                "uid": "V4GTUC_jTGiqp5B5q3VI3g",
                "type": "heatmap",
                "options": {
                  "labelPosition": "bottomRight",
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "maxZoom": null,
                  "colorbarPosition": "topRight",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "heatmapValueScaling": "log",
                  "name": "Rao et al. (2014) K562 MboI (allreps) 1kb",
                  "scaleStartPercent": "0.00000",
                  "scaleEndPercent": "1.00000"
                },
                "width": 515,
                "height": 457,
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ],
                "position": "center"
              },
              {
                "uid": "QcfbDgBSQlKNEnGoTmOWNw",
                "type": "viewport-projection-center",
                "fromViewUid": "view1",
                "options": {
                  "projectionFillColor": "#777",
                  "projectionStrokeColor": "#777",
                  "projectionFillOpacity": 0.3,
                  "projectionStrokeOpacity": 0.7,
                  "strokeWidth": 13
                },
                "name": "Viewport Projection",
                "position": "center",
                "width": 515,
                "height": 457
              },
              {
                "name": "Chromosome Grid",
                "created": "2017-06-06T17:03:01.273116Z",
                "server": "https://higlass.io/api/v1",
                "tilesetUid": "N12wVGG9SPiTkk03yUayUw",
                "uid": "XbYPwIByR5-XhhaFZBuIfg",
                "type": "2d-chromosome-grid",
                "options": {
                  "lineStrokeWidth": 1,
                  "lineStrokeColor": "grey"
                },
                "position": "center"
              }
            ],
            "position": "center",
            "options": {},
            "width": 515,
            "height": 457
          }
        ],
        "bottom": [],
        "right": [],
        "whole": []
      },
      "layout": {
        "w": 12,
        "h": 7,
        "x": 0,
        "y": 7,
        "i": "YFsuh_3LSouL-_GaY9d7Xg",
        "moved": false,
        "static": false
      },
      "genomePositionSearchBoxVisible": true,
      "genomePositionSearchBox": {
        "autocompleteServer": "https://higlass.io/api/v1",
        "chromInfoServer": "https://higlass.io/api/v1",
        "visible": true,
        "chromInfoId": "hg19",
        "autocompleteId": "OHJakQICQD6gTD7skx4EWA"
      }
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "valueScaleLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }
}

    window.higlassApi;

    hglib.createHgComponent(
        document.getElementById('development-demo'),
        testViewConfig,
        { bounded: true },
        function (api) {
            window.hgApi = api;
        }
    );

hglib.ChromosomeInfo(testViewConfig.views[0].chromInfoPath, function(chromInfo) {
  d3.tsv('data/K562_integratedBPs.txt', function(error, data)  {
    var svs = d3.select('#sv-list')
      .selectAll('li')
      .data(data)
      .enter()
      .append('li')
      .append('a')
      .text(function(d) {
        const format = d3.format(".3s");
        const region1Parts = d.region1.split('_');
        const region2Parts = d.region2.split('_');

        const region11 = format(region1Parts[0]);
        const region12 = format(region1Parts[1]);

        const region21 = format(region2Parts[0]);
        const region22 = format(region2Parts[1]);

        // console.log('region1Parts:', region11);

        return `${d.chrom1}:${region11},${region12} - ${d.chrom2}:${region21},${region22}`;

      })
      .style('cursor', 'pointer')
      .on('click', function(d) {
        var chrom1 = d.chrom1;
        var region1Parts = d.region1.split('_');
        var from1 = +region1Parts[0];
        var to1 = +region1Parts[1];

        var region2Parts = d.region2.split('_');
        var chrom2 = d.chrom2;
        var from2 = +region2Parts[0];
        var to2 = +region2Parts[1];

        var width = (to1 - from1);
        var padding = 40*width;

        window.hgApi.goTo('view1',
          chrom1, from1 - padding, to1 + padding,
          chrom2, from2 - padding, to2 + padding,
          true, 2000);

      });

      window.hgApi.on('location', function(data) {
        const fromX = chromInfo.chrPositions[data[0]].pos + data[1];
        const toX = chromInfo.chrPositions[data[2]].pos + data[3];
        const fromY = chromInfo.chrPositions[data[4]].pos + data[5];
        const toY = chromInfo.chrPositions[data[6]].pos + data[7];


        svs.style('background', 'transparent');

        const visibleSvs = svs.filter(function(d) {
          const region1Parts = d.region1.split('_')
          const region2Parts = d.region2.split('_');

          const x1 = chromInfo.chrPositions[d.chrom1].pos + +region1Parts[0];
          const x2 = chromInfo.chrPositions[d.chrom1].pos + +region1Parts[1];

          const y1 = chromInfo.chrPositions[d.chrom2].pos + +region2Parts[0];
          const y2 = chromInfo.chrPositions[d.chrom2].pos + +region2Parts[1];

          //console.log('fromX:', fromX, fromY, toX, toY);
          //console.log('region:', x1, y1, x2, y2);

          if (fromX < x1 && x2 < toX) {
            if (fromY < y1 && y2 < toY) {
              return true;
            }
          }

          return false;
        });

        visibleSvs.style('background', 'yellow');

        //console.log('data:', data);
      }, 'view1');
    ;
  });
});