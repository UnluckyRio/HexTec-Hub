package HextechHub.HextechHub;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("Scraping Controller Tests")
class ScrapingControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("Test endpoint GET /api/scraping/champions/tiers")
    void testGetChampionTiers() throws Exception {
        mockMvc.perform(get("/api/scraping/champions/tiers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data").isArray());
    }

    @Test
    @DisplayName("Test endpoint POST /api/scraping/generic")
    void testScrapeGeneric() throws Exception {
        String requestBody = """
                {
                    "url": "https://www.example.com",
                    "selector": "div"
                }
                """;

        mockMvc.perform(post("/api/scraping/generic")
                        .contentType("application/json")
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").exists());
    }

    @Test
    @DisplayName("Test endpoint POST /api/scraping/single")
    void testScrapeSingle() throws Exception {
        String requestBody = """
                {
                    "url": "https://www.example.com",
                    "selector": "h1"
                }
                """;

        mockMvc.perform(post("/api/scraping/single")
                        .contentType("application/json")
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").exists());
    }

    @Test
    @DisplayName("Test validazione parametri mancanti")
    void testMissingParameters() throws Exception {
        String requestBody = """
                {
                    "url": "https://www.example.com"
                }
                """;

        mockMvc.perform(post("/api/scraping/generic")
                        .contentType("application/json")
                        .content(requestBody))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false));
    }
}

