package kr.goguma.leica.soppha.controller;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.goguma.leica.helpers.RestHelper;
import kr.goguma.leica.soppha.models.NewMember;
import kr.goguma.leica.soppha.services.MemberService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Tag(name = "New Member Join API", description = "신규 가입 회원 API")
public class NewMemberRestController {

    private final MemberService ms;
    private final RestHelper rs;

    // 일별 가입자 수 조회
    @Operation(summary = "일간 신규 가입 회원 조회", description = "회원 조회 메서드 입니다.")
    @GetMapping("/api/members/daily")
    public Map<String, Object> getDailyNewMembers() {
        return rs.sendJson(ms.getDailyNewMembers());
    }

    // 주간 가입자 수 조회
    @Operation(summary = "주간 신규 가입 회원 조회", description = "회원 조회 메서드 입니다.")
    @GetMapping("/api/members/weekly")
    public Map<String, Object> getWeeklyMembers() {
        return rs.sendJson(ms.getWeeklyNewMembers());
    }

}
