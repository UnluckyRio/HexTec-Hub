package HextechHub.HextechHub.config;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configurazione per Selenium WebDriver
 * Fornisce i bean necessari per il web scraping
 */
@Configuration
public class SeleniumConfig {

    /**
     * Crea le opzioni predefinite di Chrome
     *
     * @return ChromeOptions configurate
     */
    @Bean
    public ChromeOptions getChromeOptions() {
        WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");                        // Esegui in background
        options.addArguments("--disable-gpu");                     // Disabilita GPU per headless
        options.addArguments("--no-sandbox");                      // Disabilita sandbox (utile in Docker)
        options.addArguments("--disable-dev-shm-usage");          // Riduci uso memoria
        options.addArguments("--window-size=1920,1080");          // Dimensioni finestra
        options.addArguments("--disable-blink-features=AutomationControlled");  // Nascondi che è automatico
        options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");

        // Disabilita immagini per velocità (opzionale)
        // options.setPageLoadStrategy(PageLoadStrategy.EAGER);

        return options;
    }

    /**
     * Crea un'istanza di WebDriver (factory bean)
     * NOTA: Usare con cautela, meglio creare driver localmente nel servizio
     *
     * @return Istanza di ChromeDriver
     */
    @Bean(destroyMethod = "quit")
    public WebDriver webDriver() {
        return new ChromeDriver(getChromeOptions());
    }
}

