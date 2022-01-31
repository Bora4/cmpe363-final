async function getapi(){



var YearBuilt = document.getElementById('YearBuilt').value
var CentralAir = document.getElementById('CentralAir').value.toUpperCase()
var GrLivArea = document.getElementById('GrLivArea').value
var FullBath = document.getElementById('FullBath').value
var HalfBath = document.getElementById('HalfBath').value
var BedroomAbvGr = document.getElementById('BedroomAbvGr').value
var KitchenAbvGr = document.getElementById('KitchenAbvGr').value
var TotRmsAbvGrd = document.getElementById('TotRmsAbvGrd').value
var GarageCars = document.getElementById('GarageCars').value



let data = {
    "Inputs": {
        "input1":
        [
            {
                'Id': "0",   
                        'MSSubClass': "0",   
                        'MSZoning': "0",   
                        'LotFrontage': "0",   
                        'LotArea': "0",   
                        'Street': "0",   
                        'Alley': "0",   
                        'LotShape': "0",   
                        'LandContour': "0",   
                        'Utilities': "0",   
                        'LotConfig': "0",   
                        'LandSlope': "0",   
                        'Neighborhood': "0",   
                        'Condition1': "0",   
                        'Condition2': "0",   
                        'BldgType': "0",   
                        'HouseStyle': "0",   
                        'OverallQual': "0",   
                        'OverallCond': "0",   
                        'YearBuilt': YearBuilt,   
                        'YearRemodAdd': "0",   
                        'RoofStyle': "0",   
                        'RoofMatl': "0",   
                        'Exterior1st': "0",   
                        'Exterior2nd': "0",   
                        'MasVnrType': "0",   
                        'MasVnrArea': "0",   
                        'ExterQual': "0",   
                        'ExterCond': "0",   
                        'Foundation': "0",   
                        'BsmtQual': "0",   
                        'BsmtCond': "0",   
                        'BsmtExposure': "0",   
                        'BsmtFinType1': "0",   
                        'BsmtFinSF1': "0",   
                        'BsmtFinType2': "0",   
                        'BsmtFinSF2': "0",   
                        'BsmtUnfSF': "0",   
                        'TotalBsmtSF': "0",   
                        'Heating': "0",   
                        'HeatingQC': "0",   
                        'CentralAir': CentralAir,   
                        'Electrical': "0",   
                        '1stFlrSF': "0",   
                        '2ndFlrSF': "0",   
                        'LowQualFinSF': "0",   
                        'GrLivArea': GrLivArea,   
                        'BsmtFullBath': "0",   
                        'BsmtHalfBath': "0",   
                        'FullBath': FullBath,   
                        'HalfBath': HalfBath,   
                        'BedroomAbvGr': BedroomAbvGr,   
                        'KitchenAbvGr': KitchenAbvGr,   
                        'KitchenQual': "0",   
                        'TotRmsAbvGrd': TotRmsAbvGrd,   
                        'Functional': "0",   
                        'Fireplaces': "0",   
                        'FireplaceQu': "0",   
                        'GarageType': "0",   
                        'GarageYrBlt': "0",   
                        'GarageFinish': "0",   
                        'GarageCars': GarageCars,   
                        'GarageArea': "0",   
                        'GarageQual': "0",   
                        'GarageCond': "0",   
                        'PavedDrive': "0",   
                        'WoodDeckSF': "0",   
                        'OpenPorchSF': "0",   
                        'EnclosedPorch': "0",   
                        '3SsnPorch': "0",   
                        'ScreenPorch': "0",   
                        'PoolArea': "0",   
                        'PoolQC': "0",   
                        'Fence': "0",   
                        'MiscFeature': "0",   
                        'MiscVal': "0",   
                        'MoSold': "0",   
                        'YrSold': "0",   
                        'SaleType': "0",   
                        'SaleCondition': "0",   
                        'SalePrice': "0",
            }
        ],
    },
    "GlobalParameters": {}
}



    const url = "https://ussouthcentral.services.azureml.net/workspaces/89540016164b4f50bee7e1d8b96e757b/services/9e89fe9bb5e646568ec0c5e02824c352/execute?api-version=2.0&format=swagger";
    const apiKey = "Ryq0yKtoBRYJ+AqoSErVXUtxquxPDs36EzJ4ECZxaVfjQ1NZhHlZ85esnhRHCrykPaaVuJ3xNpwNbR1fZfZjFA==";
    var xhr = new XMLHttpRequest();
    var Authorization = "Bearer " + apiKey

    xhr.open('POST', url, true);

    xhr.setRequestHeader("Content-Type","application/json")
    xhr.setRequestHeader("Authorization", Authorization)

    xhr.onload = function(){
        if(this.status == 200){
            var data = this.responseText;
            console.log("response text: " + data);
            alert(data)
        } else {
            console.log("response text:" + this.responseText);
        }
    }
    data = JSON.stringify(data)
    xhr.send(data)
}


// getapi()