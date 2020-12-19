
class Bert {
  init() {
    console.log('bert init');
  }

  getMask(input) {
    console.log('bert mask');
    let res = this.masksDictionary[input]
    return new Promise((resolve, reject)=>{
      setTimeout(_=>resolve(res), 3000)
    })
  }

  close() {
    console.log('bert close');
  }


  masksDictionary = {
    '[MASK]+like+words+a+lot+.': 
      '[{"sequence":"[CLS] i like words a lot. [SEP]","score":0.9612478613853455,"token":1045,"token_str":"i"},{"sequence":"[CLS] you like words a lot. [SEP]","score":0.006607287097722292,"token":2017,"token_str":"you"},{"sequence":"[CLS] they like words a lot. [SEP]","score":0.005981788970530033,"token":2027,"token_str":"they"},{"sequence":"[CLS] we like words a lot. [SEP]","score":0.005693613551557064,"token":2057,"token_str":"we"},{"sequence":"[CLS] people like words a lot. [SEP]","score":0.003814099356532097,"token":2111,"token_str":"people"}]',
    'i+[MASK]+words+a+lot+.':
      '[{"sequence":"[CLS] i used words a lot. [SEP]","score":0.1589212864637375,"token":2109,"token_str":"used"},{"sequence":"[CLS] i use words a lot. [SEP]","score":0.14142949879169464,"token":2224,"token_str":"use"},{"sequence":"[CLS] i said words a lot. [SEP]","score":0.10906927287578583,"token":2056,"token_str":"said"},{"sequence":"[CLS] i hate words a lot. [SEP]","score":0.07650131732225418,"token":5223,"token_str":"hate"},{"sequence":"[CLS] i say words a lot. [SEP]","score":0.04115287587046623,"token":2360,"token_str":"say"}]',
    'i+like+[MASK]+a+lot+.':
      '[{"sequence":"[CLS] i like him a lot. [SEP]","score":0.2710074782371521,"token":2032,"token_str":"him"},{"sequence":"[CLS] i like her a lot. [SEP]","score":0.2218271940946579,"token":2014,"token_str":"her"},{"sequence":"[CLS] i like it a lot. [SEP]","score":0.17590096592903137,"token":2009,"token_str":"it"},{"sequence":"[CLS] i like that a lot. [SEP]","score":0.07931344211101532,"token":2008,"token_str":"that"},{"sequence":"[CLS] i like you a lot. [SEP]","score":0.07210371643304825,"token":2017,"token_str":"you"}]',
    'i+like+words+[MASK]+lot+.':
      '[{"sequence":"[CLS] i like words a lot. [SEP]","score":0.9998082518577576,"token":1037,"token_str":"a"},{"sequence":"[CLS] i like words, lot. [SEP]","score":6.77416828693822e-05,"token":1010,"token_str":","},{"sequence":"[CLS] i like words very lot. [SEP]","score":2.2647040168521926e-05,"token":2200,"token_str":"very"},{"sequence":"[CLS] i like words that lot. [SEP]","score":1.4694187484565191e-05,"token":2008,"token_str":"that"},{"sequence":"[CLS] i like words the lot. [SEP]","score":1.42763101393939e-05,"token":1996,"token_str":"the"}]',
    'i+like+words+a+[MASK]+.':
      '[{"sequence":"[CLS] i like words a lot. [SEP]","score":0.9930440783500671,"token":2843,"token_str":"lot"},{"sequence":"[CLS] i like words a little. [SEP]","score":0.005709553603082895,"token":2210,"token_str":"little"},{"sequence":"[CLS] i like words a bit. [SEP]","score":0.0009362603886984289,"token":2978,"token_str":"bit"},{"sequence":"[CLS] i like words a bunch. [SEP]","score":5.918295937590301e-05,"token":9129,"token_str":"bunch"},{"sequence":"[CLS] i like words a much. [SEP]","score":2.5595312763471156e-05,"token":2172,"token_str":"much"}]',
    '[MASK]+like+him+a+lot+.':
      '[{"sequence":"[CLS] i like him a lot. [SEP]","score":0.9877210259437561,"token":1045,"token_str":"i"},{"sequence":"[CLS] they like him a lot. [SEP]","score":0.0032812831923365593,"token":2027,"token_str":"they"},{"sequence":"[CLS] you like him a lot. [SEP]","score":0.0027416094671934843,"token":2017,"token_str":"you"},{"sequence":"[CLS] we like him a lot. [SEP]","score":0.001689741387963295,"token":2057,"token_str":"we"},{"sequence":"[CLS] people like him a lot. [SEP]","score":0.0008861374226398766,"token":2111,"token_str":"people"}]',
    'i+[MASK]+him+a+lot+.':
      '[{"sequence":"[CLS] i like him a lot. [SEP]","score":0.24578942358493805,"token":2066,"token_str":"like"},{"sequence":"[CLS] i miss him a lot. [SEP]","score":0.22110261023044586,"token":3335,"token_str":"miss"},{"sequence":"[CLS] i liked him a lot. [SEP]","score":0.16403190791606903,"token":4669,"token_str":"liked"},{"sequence":"[CLS] i missed him a lot. [SEP]","score":0.10326240211725235,"token":4771,"token_str":"missed"},{"sequence":"[CLS] i loved him a lot. [SEP]","score":0.061652567237615585,"token":3866,"token_str":"loved"}]',
    '[MASK]+used+words+a+lot+.':
      '[{"sequence":"[CLS] he used words a lot. [SEP]","score":0.30052563548088074,"token":2002,"token_str":"he"},{"sequence":"[CLS] i used words a lot. [SEP]","score":0.24366451799869537,"token":1045,"token_str":"i"},{"sequence":"[CLS] she used words a lot. [SEP]","score":0.20655179023742676,"token":2016,"token_str":"she"},{"sequence":"[CLS] we used words a lot. [SEP]","score":0.06395561248064041,"token":2057,"token_str":"we"},{"sequence":"[CLS] they used words a lot. [SEP]","score":0.05334452912211418,"token":2027,"token_str":"they"}]',
    'i+used+[MASK]+a+lot+.':
      '[{"sequence":"[CLS] i used it a lot. [SEP]","score":0.2649122476577759,"token":2009,"token_str":"it"},{"sequence":"[CLS] i used to a lot. [SEP]","score":0.25571560859680176,"token":2000,"token_str":"to"},{"sequence":"[CLS] i used them a lot. [SEP]","score":0.10457387566566467,"token":2068,"token_str":"them"},{"sequence":"[CLS] i used that a lot. [SEP]","score":0.07637757062911987,"token":2008,"token_str":"that"},{"sequence":"[CLS] i used her a lot. [SEP]","score":0.06260756403207779,"token":2014,"token_str":"her"}]'
    }
}
