class UrlService{
    private port = 8080;
    public admin =`http://localhost:${this.port}/api/admin`;
    public company =`http://localhost:${this.port}/api/companies`;
    public customer =`http://localhost:${this.port}/api/customers`;
    public auth =`http://localhost:${this.port}/api/auth`;

}

const  urlService = new UrlService();
export default urlService; 