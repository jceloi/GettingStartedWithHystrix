var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9000",
        "ok": "3286",
        "ko": "5714"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60060",
        "ok": "59963",
        "ko": "60060"
    },
    "meanResponseTime": {
        "total": "47544",
        "ok": "25875",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "19128",
        "ok": "16202",
        "ko": "3"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "23311",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "37701",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "60010",
        "ok": "55995",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "59124",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 104,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3166,
        "percentage": 35
    },
    "group4": {
        "name": "failed",
        "count": 5714,
        "percentage": 63
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.37",
        "ok": "9.628",
        "ko": "16.742"
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
        "ok": "2215",
        "ko": "3285"
    },
    "minResponseTime": {
        "total": "274",
        "ok": "274",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60060",
        "ok": "59963",
        "ko": "60060"
    },
    "meanResponseTime": {
        "total": "47114",
        "ok": "27995",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "18219",
        "ok": "14568",
        "ko": "3"
    },
    "percentiles1": {
        "total": "60003",
        "ok": "25886",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "37783",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60010",
        "ok": "55432",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "59020",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 8,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2204,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 3285,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "16.115",
        "ok": "6.49",
        "ko": "9.625"
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
        "ok": "1071",
        "ko": "2429"
    },
    "minResponseTime": {
        "total": "56",
        "ok": "56",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60042",
        "ok": "59807",
        "ko": "60042"
    },
    "meanResponseTime": {
        "total": "48220",
        "ok": "21491",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "20456",
        "ok": "18385",
        "ko": "3"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "14073",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60008",
        "ok": "36866",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60011",
        "ok": "56493",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "59208",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 96,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 962,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 2429,
        "percentage": 69
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "10.255",
        "ok": "3.138",
        "ko": "7.117"
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
