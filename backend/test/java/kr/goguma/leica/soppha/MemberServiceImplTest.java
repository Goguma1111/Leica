package kr.goguma.leica.soppha;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import kr.goguma.leica.mapper.SalesAnalyticsMapper;
import kr.goguma.leica.soppha.mapper.MemberMapper;
import kr.goguma.leica.soppha.models.NewMember;
import kr.goguma.leica.soppha.services.MemberService;
import kr.goguma.leica.soppha.services.impl.MemberServiceImpl;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
@MapperScan("kr.goguma.leica.soppha.mapper")
public class MemberServiceImplTest {

    @MockBean
    private SalesAnalyticsMapper salesAnalyticsMapper; // 문제 되는 매퍼 Mock 처리

    @Autowired
    private MemberService ms;

    @Autowired
    private MemberMapper memberMapper;


    @Test
    void GetDailyNewMembers() {
        List<NewMember> output = null;
        log.info("=== 일별 신규 회원 조회 테스트 시작 ===");
        try {
            output = ms.getDailyNewMembers();

        } catch (Exception e) {
            log.error("서비스 에러", e);
        }

        log.debug("output: " + output);
    }


}
