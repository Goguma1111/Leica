package kr.goguma.leica.soppha.schedulers;

import java.time.LocalDateTime;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


@Component
@EnableAsync
public class MemberScheduler {


    /**
     * 지정된 스케줄에 따라 실행
     * => 초 분 시 일 월 ?
     *
     * 1초 마다 실행되는 작업       : * * * * * ?
     * 매 분 0초에 실행되는 작업    : 0 * * * * ?
     * 매 분 10초마다 실행          : 10 * * * * ?  ==> 1시 0분 10초, 1시 1분 10초, 1시 2분 10초 ...
     * 매 10초마다 실행             : 0/10 * * * * ? ==>1시 0분 0초, 1시 0분 10초, 1시 0분 20초, 1시 0분 30초 ...
     * 매시 정각에 실행되는 작업    : 0 0 * * * ?
     * 매일 자정에 실행되는 작업    : 0 0 0 * * ?
     *
     *
     * http://www.cronmaker.com/
     */
    @Scheduled(cron = "0 08 * * * ?")
    public void sample4() throws InterruptedException {
        System.out.println("[sample4] 시작" + LocalDateTime.now());
        Thread.sleep(3000);
        System.out.println("[sample4] 끝" + LocalDateTime.now());

    }
}
