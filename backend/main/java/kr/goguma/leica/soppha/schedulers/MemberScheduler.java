package kr.goguma.leica.soppha.schedulers;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import kr.goguma.leica.soppha.models.NewMember;
import kr.goguma.leica.soppha.services.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@EnableAsync
@RequiredArgsConstructor
public class MemberScheduler {
    private final MemberService ms;



    @Scheduled(cron = "0 0 1 * * ?")
    public void collectDailyNewMembers() throws InterruptedException {
        log.info("스케쥴링 활성화");
           try {
            ms.insertDailyNewMembers(); // 매퍼에서 전일 가입자 집계 + INSERT
            log.info("[스케줄러] 전일 가입자 수 집계 완료");
        } catch (Exception e) {
            log.error("[스케줄러] 전일 가입자 수 집계 실패", e);
        }
}
}
