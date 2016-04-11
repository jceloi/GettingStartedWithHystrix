package com.vsct.pizzbeer.controller;

import com.vsct.pizzbeer.bean.Duration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

/**
 * Created by jce on 10/04/2016.
 */
@RestController()
public class SimpleApi {

    @Value("${duration.randomPart}")
    private Integer randomPart;

    @Value("${duration.fixedPart}")
    private Integer fixedPart;

    @Value("${error.mode}")
    private Boolean errorMode;

    @RequestMapping(value = "/partner/duration", method = RequestMethod.GET)
    public Duration getDuration() {


        if (errorMode) {
            String error = null;
            error.charAt(0);
        }


        Duration duration = new Duration();

        Random random = new Random(System.currentTimeMillis());
        duration.setDuration(fixedPart + random.nextInt(randomPart));

        try {
            Thread.sleep(duration.getDuration());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return duration;

    }



}
