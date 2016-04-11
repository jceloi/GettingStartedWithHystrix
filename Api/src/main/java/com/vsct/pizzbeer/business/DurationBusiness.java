package com.vsct.pizzbeer.business;

import com.vsct.pizzbeer.controller.bean.Durations;
import com.vsct.pizzbeer.dao.DurationPartnerDao;
import com.vsct.pizzbeer.dao.PartnerOneDao;
import com.vsct.pizzbeer.dao.PartnerTwoDao;
import com.vsct.pizzbeer.dao.bean.Duration;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by jce on 10/04/2016.
 */
@Service
public class DurationBusiness {

    @Resource
    private PartnerOneDao partnerOneDao;

    @Resource
    private DurationPartnerDao partnerTwoDao;

    @Resource(name = "PartnerTwoDaoHC")
    private DurationPartnerDao partnerTwoDaoWithHC;

    @Resource(name = "PartnerTwoDaoHJavanica")
    private DurationPartnerDao partnerTwoDaoWithJavanica;




    public Durations getDurations() {

        Duration firstDuration = this.partnerOneDao.getDuration();
        Duration secondDuration = this.partnerTwoDao.getDuration();


        Durations durations = processDurations(firstDuration, secondDuration);

        return durations;
    }


    //region With HystrixCommand
    public Durations getDurationsWithHystrixCommand() {

        Duration firstDuration = this.partnerOneDao.getDuration();
        Duration secondDuration = this.partnerTwoDaoWithHC.getDuration();


        Durations durations = processDurations(firstDuration, secondDuration);

        return durations;
    }
    //endregion

    //region With Hystrix javanica
    public Durations getDurationsWithHystrixAnnotations() {

        Duration firstDuration = this.partnerOneDao.getDuration();
        Duration secondDuration = this.partnerTwoDaoWithJavanica.getDuration();


        Durations durations = processDurations(firstDuration, secondDuration);

        return durations;
    }
    //endregion

    private Durations processDurations(Duration firstDuration, Duration secondDuration) {
        Durations durations = new Durations();
        durations.setFirstDuration(getDurationEventIfNull(firstDuration.getDuration()));
        durations.setSecondDuration(getDurationEventIfNull(secondDuration.getDuration()));
        durations.setTotalDuration(Math.max(0, durations.getFirstDuration()) + Math.max(0, durations.getSecondDuration()));
        return durations;
    }

    private Integer getDurationEventIfNull(Integer duration) {
        return duration != null ? duration : -1;
    }
}
