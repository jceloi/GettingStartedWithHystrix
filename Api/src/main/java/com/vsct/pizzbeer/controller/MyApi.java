package com.vsct.pizzbeer.controller;

import com.vsct.pizzbeer.business.DurationBusiness;
import com.vsct.pizzbeer.controller.bean.Durations;
import com.vsct.pizzbeer.controller.bean.SomethingElse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Random;

/**
 * Created by jce on 10/04/2016.
 */
@RestController()
public class MyApi {

    @Resource
    private DurationBusiness durationBusiness;

    @RequestMapping(path = "/api/durations", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody Durations getDurations() {

        //Durations durations = this.durationBusiness.getDurations();
        //Durations durations = this.durationBusiness.getDurationsWithHystrixCommand();
        Durations durations = this.durationBusiness.getDurationsWithHystrixAnnotations();

        return durations;

    }


    @RequestMapping(path = "/api/healthcheck", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    SomethingElse getHealthCheck() {

        SomethingElse somethingElse = new SomethingElse();

        Random random = new Random(System.currentTimeMillis());

        String quote = "All is up here : " + random.nextInt(10000);

        somethingElse.setRandomQuote(quote);
        try {
            Thread.sleep(55);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return somethingElse;

    }



}
