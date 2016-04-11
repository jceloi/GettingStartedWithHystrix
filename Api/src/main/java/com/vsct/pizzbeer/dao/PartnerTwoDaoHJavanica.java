package com.vsct.pizzbeer.dao;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.vsct.pizzbeer.dao.bean.Duration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by jce on 10/04/2016.
 */
@Service(value = "PartnerTwoDaoHJavanica")
public class PartnerTwoDaoHJavanica implements DurationPartnerDao{

    private  final Logger LOG = LoggerFactory.getLogger(getClass());

    @Value("${partner2.url}")
    private String serviceUri;

    @HystrixCommand(commandKey = "getDuration",
            groupKey = "partnerTwo",
            threadPoolKey = "partnerTwo",
            fallbackMethod = "getDurationFallback"
    )
    public Duration getDuration() {


        RestTemplate restTemplate = new RestTemplate();
        Duration serviceTwoDuration = restTemplate.getForObject(serviceUri, Duration.class);

        return serviceTwoDuration;
    }

    public Duration getDurationFallback(Throwable e) {

        //https://github.com/Netflix/Hystrix/issues/974
        //https://github.com/Netflix/Hystrix/pull/1167
        LOG.error("Fallback for getDuration", e);


        return new Duration();
    }
}
