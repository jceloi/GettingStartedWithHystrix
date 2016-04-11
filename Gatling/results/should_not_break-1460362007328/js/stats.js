var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9000",
        "ok": "9000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7529",
        "ok": "7529",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3510",
        "ok": "3510",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2169",
        "ok": "2169",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3886",
        "ok": "3887",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5461",
        "ok": "5461",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6156",
        "ok": "6156",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7085",
        "ok": "7085",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1692,
        "percentage": 19
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 222,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7086,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "211.164",
        "ok": "211.164",
        "ko": "-"
    }
},
contents: {
"req_-api-durations-6911d": {
        type: "REQUEST",
        name: "/api/durations",
path: "/api/durations",
pathFormatted: "req_-api-durations-6911d",
stats: {
    "name": "/api/durations",
    "numberOfRequests": {
        "total": "5500",
        "ok": "5500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7529",
        "ok": "7529",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3587",
        "ok": "3587",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2250",
        "ok": "2250",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3834",
        "ok": "3834",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5747",
        "ok": "5747",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6267",
        "ok": "6267",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7222",
        "ok": "7222",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1055,
        "percentage": 19
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 146,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4299,
        "percentage": 78
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "129.044",
        "ok": "129.044",
        "ko": "-"
    }
}
    },"req_-api-somethinge-204e4": {
        type: "REQUEST",
        name: "/api/somethingelse",
path: "/api/somethingelse",
pathFormatted: "req_-api-somethinge-204e4",
stats: {
    "name": "/api/somethingelse",
    "numberOfRequests": {
        "total": "3500",
        "ok": "3500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6782",
        "ok": "6782",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3387",
        "ok": "3387",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2031",
        "ok": "2031",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4006",
        "ok": "4006",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5214",
        "ok": "5214",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5622",
        "ok": "5622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6182",
        "ok": "6182",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 637,
        "percentage": 18
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 76,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2787,
        "percentage": 80
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "82.119",
        "ok": "82.119",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
