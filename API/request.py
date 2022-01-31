from queue import Full
import urllib.request
import json

from http.server import BaseHTTPRequestHandler, HTTPServer
import time

def makerequest(YearBuilt, CentralAir, GrLivArea, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, TotRmsAbvGrd, GarageCars):
    form = {
        "Inputs": {
                "input1":
                [
                    {  
                            'Id': "",   
                            'MSSubClass': "",   
                            'MSZoning': "",   
                            'LotFrontage': "",   
                            'LotArea': "",   
                            'Street': "",   
                            'Alley': "",   
                            'LotShape': "",   
                            'LandContour': "",   
                            'Utilities': "",   
                            'LotConfig': "",   
                            'LandSlope': "",   
                            'Neighborhood': "",   
                            'Condition1': "",   
                            'Condition2': "",   
                            'BldgType': "",   
                            'HouseStyle': "",   
                            'OverallQual': "",   
                            'OverallCond': "",   
                            'YearBuilt': YearBuilt,   
                            'YearRemodAdd': "",   
                            'RoofStyle': "",   
                            'RoofMatl': "",   
                            'Exterior1st': "",   
                            'Exterior2nd': "",   
                            'MasVnrType': "",   
                            'MasVnrArea': "",   
                            'ExterQual': "",   
                            'ExterCond': "",   
                            'Foundation': "",   
                            'BsmtQual': "",   
                            'BsmtCond': "",   
                            'BsmtExposure': "",   
                            'BsmtFinType1': "",   
                            'BsmtFinSF1': "",   
                            'BsmtFinType2': "",   
                            'BsmtFinSF2': "",   
                            'BsmtUnfSF': "",   
                            'TotalBsmtSF': "",   
                            'Heating': "",   
                            'HeatingQC': "",   
                            'CentralAir': CentralAir,   
                            'Electrical': "",   
                            '1stFlrSF': "",   
                            '2ndFlrSF': "",   
                            'LowQualFinSF': "",   
                            'GrLivArea': GrLivArea,   
                            'BsmtFullBath': "",   
                            'BsmtHalfBath': "",   
                            'FullBath': FullBath,   
                            'HalfBath': HalfBath,   
                            'BedroomAbvGr': BedroomAbvGr,   
                            'KitchenAbvGr': KitchenAbvGr,   
                            'KitchenQual': "",   
                            'TotRmsAbvGrd': TotRmsAbvGrd,   
                            'Functional': "",   
                            'Fireplaces': "",   
                            'FireplaceQu': "",   
                            'GarageType': "",   
                            'GarageYrBlt': "",   
                            'GarageFinish': "",   
                            'GarageCars': GarageCars,   
                            'GarageArea': "",   
                            'GarageQual': "",   
                            'GarageCond': "",   
                            'PavedDrive': "",   
                            'WoodDeckSF': "",   
                            'OpenPorchSF': "",   
                            'EnclosedPorch': "",   
                            '3SsnPorch': "",   
                            'ScreenPorch': "",   
                            'PoolArea': "",   
                            'PoolQC': "",   
                            'Fence': "",   
                            'MiscFeature': "",   
                            'MiscVal': "",   
                            'MoSold': "",   
                            'YrSold': "",   
                            'SaleType': "",   
                            'SaleCondition': "",   
                            'SalePrice': "",   
                    }
                ],
        },
    "GlobalParameters":  {
    }
}
    body = str.encode(json.dumps(form))

    url = 'https://ussouthcentral.services.azureml.net/workspaces/89540016164b4f50bee7e1d8b96e757b/services/9e89fe9bb5e646568ec0c5e02824c352/execute?api-version=2.0&format=swagger'
    api_key = 'Ryq0yKtoBRYJ+AqoSErVXUtxquxPDs36EzJ4ECZxaVfjQ1NZhHlZ85esnhRHCrykPaaVuJ3xNpwNbR1fZfZjFA==' # Replace this with the API key for the web service
    headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

    req = urllib.request.Request(url, body, headers)

    try:
        response = urllib.request.urlopen(req)

        result = response.read()
        print(result)
    except urllib.error.HTTPError as error:
        print("The request failed with status code: " + str(error.code))

        # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
        print(error.info())
        print(json.loads(error.read().decode("utf8", 'ignore')))


class eventHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('content-type', 'text/html')
        self.end_headers()


def main():
    PORT = 5000
    server = HTTPServer(('',PORT), eventHandler)
    print('Server running on port %s' % PORT)
    server.serve_forever()

if __name__ == '__main__':
    main()