var lastdata

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
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    xhr.setRequestHeader("Access-Control-Allow-Headers", "X-MS-Trans-Info") 

    xhr.onload = function(){
        if(this.status == 200){
            var data = this.responseText;
            console.log("response text: " + data);
            alert(data)
            lastdata = data
            console.log("(1)lastdata: " +lastdata)
        } else {
            console.log("response text:" + this.responseText);
        }
    }
    data = JSON.stringify(data)
    xhr.send(data)
}

function transferdata(){
    gettrans(lastdata)
}


async function gettrans(data){

    var lang = document.getElementById('myselect').value

    console.log("(2)lastdata: " +data)
      
    const url = "https://api.cognitive.microsofttranslator.com/translate?";
    const subscriptionKey = "8795f7dc14c1487cb9d1a9791b9def2a";
    const params = "api-version=3.0&from=en&to="+lang;
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', url+params, true);
    
     xhr.setRequestHeader("Content-Type","application/json")
     xhr.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey)
     xhr.setRequestHeader("Ocp-Apim-Subscription-Region", "westeurope")
     xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
     xhr.setRequestHeader("Access-Control-Allow-Headers", "X-MS-Trans-Info") 
    //  xhr.setRequestHeader("api-version", "3.0")
    //  xhr.setRequestHeader("from", "en")
    //  xhr.setRequestHeader("to", "['de','it']")
    
    xhr.onload = function(){
        if(this.status == 200){
            var translation = this.responseText;
            console.log("response text(trans): " + translation);
            translation = translation.slice(27,-15)
            alert(translation)
        } else {
            console.log("response text(trans):" + this.responseText);
        }
    }
    data = JSON.stringify(data)
    console.log("data(1): " +data)
    data = JSON.stringify(data)
    console.log("data(2): " +data)
    data = data.replace(/\\/g, '');
    console.log("data(3): " +data)
    data = data.slice(26,-6)
    console.log("data(4): " +data)
    data = data.replace(/"/g, '');
    console.log("data(5): " +data)
    data = data.replace('YearBuilt', ' Year Built ');
    data = data.replace('CentralAir', ' Central Air ');
    data = data.replace('GrLivArea', ' Gross Living Area ');
    data = data.replace('FullBath', ' Full Bathrooms ');
    data = data.replace('HalfBath', ' Half Bathrooms ');
    data = data.replace('BedroomAbvGr', ' Bedrooms Above Ground ');
    data = data.replace('KitchenAbvGr', ' Kitchens Above Ground ');
    data = data.replace('TotRmsAbvGrd', ' Total Rooms Above Ground ');
    data = data.replace('GarageCars', ' Garage Capacity ');
    data = data.replace('SalePrice', ' Sale Price ');
    data = data.replace('Scored Labels', ' Estimated Price ');
    data = data.replace(':Y', ' : Yes ');
    data = data.replace(':N', ' : No ');
    console.log("data(6): " +data)
    console.log('[{"Text":' + data + '}]')
    xhr.send('[{"Text":"' + data + '"}]')
}