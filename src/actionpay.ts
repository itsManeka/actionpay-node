import axios, { AxiosInstance } from 'axios';

export class Actionpay {
  private apiKey: string;
  private api: AxiosInstance;

  /**
   * Constructor
   * 
   * @param string apiKey
   * 
   * @return str
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;

    this.api = axios.create({
      baseURL: 'https://actionpay.com.br/br-en/',
    });
  }

  /**
   * Utiliza o Axios para fazer a requisição em um Endpoint da Actionpay
   * 
   * @param string endpoint
   * @param Record<string, any> params
   * 
   * @return Promise<any>
   */
  private async getEndpoint(endpoint: string, params: Record<string, any>): Promise<any> {
    try {
        const response = await this.api.get(endpoint, {params});
        return response;
    } catch (error: any) {
        throw new Error(`Falha ao buscar dados do endpoint ${endpoint}: ${error.message}`);
    }
  }

  /**
   * Retorna o deeplink da URL enviada conforme as diretrizes do endpoint apiWmLinks
   * 
   * @param string url
   * @param number offer
   * @param number source
   * 
   * @return str
   */
  async deeplink(url: string, offer: number, source: number): Promise<any> {
    const params = {
        key: this.apiKey,
        format: "json",
        offer: offer,
        source: source
    }

    try {
      const result = await this.getEndpoint("apiWmLinks", params);
      var content = result.data;

      if (content.error) {
        throw new Error(content.error);
      } else {
        for(var key in content.result.links){
          if(/url\=/.test(content.result.links[key].url)) {
              return content.result.links[key].url.replace("example.com", encodeURIComponent(url));
          }
        }
        
        throw new Error("Esse programa não permite deeplink de uma url.");
      }
    } catch (error: any) {
      throw new Error(`Falha ao buscar deeplink: ${error.message}`);
    }
  }
}
