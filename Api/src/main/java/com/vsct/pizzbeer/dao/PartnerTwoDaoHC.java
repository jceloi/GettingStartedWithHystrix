package com.vsct.pizzbeer.dao;

import com.vsct.pizzbeer.dao.bean.Duration;
import com.vsct.pizzbeer.dao.hystrix.PartnerTwoDurationCommand;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;

/**
 * Created by jce on 10/04/2016.
 */
@Service(value = "PartnerTwoDaoHC")
public class PartnerTwoDaoHC implements DurationPartnerDao{

    @Resource
    private PartnerTwoDao partnerTwoDao;

    public Duration getDuration() {

        Duration serviceTwoDuration = new PartnerTwoDurationCommand("PartnerTwo", partnerTwoDao).execute();

        return serviceTwoDuration;
    }
}
