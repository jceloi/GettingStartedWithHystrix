package com.vsct.pizzbeer.dao.hystrix;

import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;
import com.netflix.hystrix.HystrixThreadPool;
import com.netflix.hystrix.HystrixThreadPoolKey;
import com.vsct.pizzbeer.dao.PartnerTwoDao;
import com.vsct.pizzbeer.dao.bean.Duration;

/**
 * Created by jce on 10/04/2016.
 */
public class PartnerTwoDurationCommand extends HystrixCommand<Duration>{


    private PartnerTwoDao partnerTwoDao;


    public PartnerTwoDurationCommand(String group, PartnerTwoDao partnerTwoDao) {
        super(HystrixCommandGroupKey.Factory.asKey(group), HystrixThreadPoolKey.Factory.asKey("partnerTwo"), 5000);
        this.partnerTwoDao = partnerTwoDao;
    }

    @Override
    protected Duration run() throws Exception {

        Duration duration = this.partnerTwoDao.getDuration();

        return duration;
    }

    @Override
    protected Duration getFallback() {
        return new Duration();
    }
}
