exec('Rscript PATH/TO/test.R')
library(ISLR)
samp = 1:1000
Caravan$Purchase = ifelse(Caravan$Purchase == "Yes", 1, 0)
train = Caravan[samp, ]
test = Caravan[-samp, ]

library(gbm)
## Loaded gbm 2.1.8.1
set.seed(10)
boost.caravan = gbm(Purchase~., data=train, n.trees = 1000, shrinkage = 0.01, distribution = "bernoulli")
## Warning in gbm.fit(x = x, y = y, offset = offset, distribution = distribution, :
## variable 50: PVRAAUT has no variation.
## Warning in gbm.fit(x = x, y = y, offset = offset, distribution = distribution, :
## variable 71: AVRAAUT has no variation.
summary(boost.caravan)



