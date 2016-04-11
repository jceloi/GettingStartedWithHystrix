package com.vsct.pizzbeer.dao;

import com.vsct.pizzbeer.dao.bean.Duration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by jce on 10/04/2016.
 */
@Service
public class PartnerTwoDao implements DurationPartnerDao{

    @Value("${partner2.url}")
    private String serviceUri;

    public Duration getDuration() {


        RestTemplate restTemplate = new RestTemplate();
        Duration serviceTwoDuration = restTemplate.getForObject(serviceUri, Duration.class);

        return serviceTwoDuration;
    }
}
