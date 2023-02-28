---
title: 背包问题
tags:
 - DP
categories:
 - algorithms
date: 2022-12-12
---

## 1. 0 1 背包
有 N 件物品和一个容量是 V 的背包。每件物品只能使用一次。
第 i 件物品的体积是 v~i~，价值是 w~i~。
求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。

输出最大价值。

**输入格式**

第一行两个整数，N，V，用空格隔开，分别表示物品数量和背包容积。
接下来有 N 行，每行两个整数 v~i~,w~i~，用空格隔开，分别表示第 i 件物品的体积和价值。

**输出格式**

输出一个整数，表示最大价值。

**数据范围**

- 0 < N,V ≤ 1000
- 0 < v~i~,w~i~ ≤1 000

**输入样例**

4 5 

1 2 

2 4 

3 4 

4 5 

**输出样例：**

8

### 二维
```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 1010;
int v[N], w[N], dp[N][N];
int n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++) cin >> v[i], cin >> w[i];
    
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            dp[i][j] = dp[i - 1][j];
            if (j >= v[i])
            {
                dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + w[i]);
            }
        }
    }
    cout << dp[n][m] << endl;
    
    return 0;
}
```

### 一维
```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 1010;
int v[N], w[N], dp[N];
int n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++) cin >> v[i], cin >> w[i];
    
    for (int i = 1; i <= n; i++)
    {
        for (int j = m; j >= v[i]; j--)
        {
            dp[j] = max(dp[j], dp[j - v[i]] + w[i]);
        }
    }
    cout << dp[m] << endl;
    return 0;
}
```

## 2. 完全背包问题
有 N 种物品和一个容量是 V 的背包，每种物品都有无限件可用。

第 i 种物品的体积是 v~i~，价值是 w~i~。

求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。

输出最大价值。

**输入格式**

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。

接下来有 N 行，每行两个整数 v~i~,w~i~，用空格隔开，分别表示第 i 种物品的体积和价值。

**输出格式**

输出一个整数，表示最大价值。

**数据范围**

- 0<N,V≤1000
- 0<v~i~,w~i~≤1000

**输入样例**

4 5 

1 2 

2 4 

3 4 

4 5 

**输出样例：**

10


## 二维
```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 1010;
int v[N], w[N], dp[N][N];
int n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++) cin >> v[i] >> w[i];
    
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            dp[i][j] = dp[i - 1][j];
            if (j >= v[i])
            {
                dp[i][j] = max(dp[i][j], dp[i][j - v[i]] + w[i]);
            }
        }
    }
    cout << dp[n][m] << endl;
    return 0;
}
```

## 一维
```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 1010;
int n, m;
int v[N], w[N], dp[N];

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++) cin >> v[i] >> w[i];

    for (int i = 1; i <= n; i++)
        for (int j = v[i]; j <= m; j++)
        {
            dp[j] = max(dp[j], dp[j - v[i]] + w[i]);
        }
    cout << dp[m] << endl;
    return 0;
}
```

## 3. 多重背包问题 I

有 N 种物品和一个容量是 V 的背包。

第 i 种物品最多有 s~i~ 件，每件体积是 v~i~，价值是 w~i~。
求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。

输出最大价值。

**输入格式**

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。
接下来有 N 行，每行三个整数 v~i~, w~i~, s~i~，用空格隔开，分别表示第 i 种物品的体积、价值和数量。

**输出格式**

输出一个整数，表示最大价值。

**数据范围**
- 0<N,V≤100
- 0<v~i~, w~i~, s~i~≤100

**输入样例**

4 5 

1 2 3 

2 4 1 

3 4 3 

4 5 2 

**输出样例：**

10

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 110;
int n, m;
int v[N], w[N], s[N], dp[N][N];

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++) cin >> v[i] >> w[i] >> s[i];

    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            for (int k = 0; k <= s[i] && k * v[i] <= j; k++)
                dp[i][j] = max(dp[i][j], dp[i - 1][j - k * v[i]] + k * w[i]);
    
    cout << dp[n][m] << endl;
    return 0;
}
```

## 4. 多重背包问题 II (二进制优化)
有 N 种物品和一个容量是 V 的背包。

第 i 种物品最多有 s~i~ 件，每件体积是 v~i~，价值是 w~i~。
求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。

输出最大价值。

**输入格式**

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。

接下来有 N 行，每行三个整数 v~i~, w~i~, s~i~，用空格隔开，分别表示第 i 种物品的体积、价值和数量。

**输出格式**

输出一个整数，表示最大价值。

**数据范围**
- 0<N≤1000
- 0<V≤2000
- 0<v~i~, w~i~, s~i~≤2000

**提示：**

本题考查多重背包的二进制优化方法。

**输入样例**

4 5 

1 2 3 

2 4 1 

3 4 3 

4 5 2 

**输出样例：**

10

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 2 * 1e4, M = 2010;
int n, m;
int v[N], w[N], dp[M];

int main()
{
    cin >> n >> m;
    int a, b, c;
    int cnt = 1;
    for (int i = 1; i <= n; i++)
    {
        cin >> a >> b >> c;
        int k = 1;
        while (k <= c)
        {
            v[cnt] = k * a;
            w[cnt] = k * b;
            c -= k;
            k *= 2;
            cnt++;
        }
        if (c > 0)
        {
            v[cnt] = c * a;
            w[cnt] = c * b;
            cnt++;
        }
    }
    
    n = cnt;
    for (int i = 1; i <= n; i++)
        for (int j = m; j >= v[i]; j--)
            dp[j] = max(dp[j], dp[j - v[i]] + w[i]);
    cout << dp[m] << endl;
    return 0;
}
```

## 5. 分组背包问题
有 N 组物品和一个容量是 V 的背包。

每组物品有若干个，同一组内的物品最多只能选一个。

每件物品的体积是 v~ij~，价值是 w~ij~，其中 i 是组号，j 是组内编号。

求解将哪些物品装入背包，可使物品总体积不超过背包容量，且总价值最大。

输出最大价值。

**输入格式**

第一行有两个整数 N，V，用空格隔开，分别表示物品组数和背包容量。

**接下来有 N 组数据：**

- 每组数据第一行有一个整数 S~i~，表示第 i 个物品组的物品数量；
- 每组数据接下来有 S~i~ 行，每行有两个整数 v~ij~,w~ij~，用空格隔开，分别表示第 i 个物品组的第 j 个物品的体积和价值；

**输出格式**

输出一个整数，表示最大价值。

**数据范围**

- 0<N,V≤100
- 0<S~i~≤100
- 0< v~ij~,w~ij~ ≤100

**输入样例**

3 5 

2 

1 2 

2 4 

1 

3 4 

1 

4 5 

**输出样例：**

8

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 110;
int n, m;
int s[N], v[N][N], w[N][N], dp[N];

int main()
{
    cin >> n >> m;
    int a, b;
    for (int i = 1; i <= n; i++)
    {
        cin >> s[i];
        for (int j = 1; j <= s[i]; j++)
        {
            cin >> v[i][j] >> w[i][j];
        }
    }
    for (int i = 1; i <= n; i++)
        for (int j = m; j >= 0; j--)
            for (int k = 1; k <= s[i]; k++)
                if (v[i][k] <= j)
                    dp[j] = max(dp[j], dp[j - v[i][k]] + w[i][k]);
    
    cout << dp[m] << endl;
    
    return 0;
}
```